import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { api } from "@/lib/axios";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
        name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
          const res = await api.post("session", {
          email: credentials?.email,
          password: credentials?.password,
        });

      
        const accessToken = res.data.accessToken;
        if (accessToken) {
  
          return accessToken;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user;
        token.accessTokenExpires = Date.now() + 60 * 60 * 1000; // 1 hour
      }

      const now = Math.floor(Date.now() / 1000);
      if (token.accessTokenExpires && now > +token?.accessTokenExpires) {
        throw new Error("Access token expired");
      }

      return token;
    },
    async session({ session, token }) {
      try {
      const { data } = await api.get('session/me', {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      session.accessToken = token.accessToken as string;
      session.user = data
      return session;
    } catch (error) {
      console.error("Error fetching user session:", error);
      return session;
    }},
  },
  secret: process.env.NEXTAUTH_SECRET,
});