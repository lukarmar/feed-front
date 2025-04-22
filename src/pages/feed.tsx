import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { WritePost } from "@/components/WritePost";
import useApi, { PaginateResponse, PostProps } from "@/hooks/use-api";
import { Container } from "@/styles/pages/feed";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Feed(){
  const [dataPosts, setDataPosts] = useState<PaginateResponse<PostProps>>();
  
  const router = useRouter();
  const { data: session, status } = useSession();
  const { getPosts } = useApi();


  useEffect(() => {
    if(session === undefined && status === "authenticated") {
      router.push("/");
    }
  }, [router, status, session]);

  useEffect(() => {
    if (session) {
      getPosts(1, 10)
        .then((response) => {
          setDataPosts(response);
        })
        .catch(() => {
          toast.error('Erro ao carregar os posts', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        });
    }
  }, [])

  return (
    <>
      <Header />
    <Container>
      <WritePost setDataPosts={setDataPosts}/>
      <Post dataPosts={dataPosts} setDataPosts={setDataPosts}/>
    </Container>
    </>
  )
}