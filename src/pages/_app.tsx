import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import { Container } from "@/styles/pages/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from 'react-toastify';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <SessionProvider session={pageProps.session}>
        <Container>
          <Component {...pageProps} />;
        </Container>
      </SessionProvider>
    </>
  );
}
