import { Container, Form } from "@/styles/pages/entrances";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export function SignIn() {
  
  const router = useRouter();

  const createSession = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/feed",
    });

    if (response?.error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (response?.ok) {
      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push("/feed");
    } else {
      toast.error("Erro ao fazer login. Verifique suas credenciais.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }



  return (
    <Container>
      <h1>Sign In</h1>
      <Form onSubmit={createSession}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Sign In</button>
      </Form>
      <Link href="/signup">
        <span>Não tem conta? Cadastre-se</span>
      </Link>
    </Container>
  )
}