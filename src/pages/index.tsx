import Head from "next/head";
import { SignIn } from "./signin";

export default function Home() {

  return (
    <>
      <Head>
        <title>Feed Dialog</title>
      </Head>
      <SignIn  />
    </>
  );
}
