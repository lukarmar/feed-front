import { Container, ContentContainer, Divider, HeaderContent, InitialName, LikeContainer, PostContent } from "./styles";

import { Heart } from "phosphor-react"
import useApi, {  LikeProps, PostProps, PaginateResponse } from "@/hooks/use-api";
import { useEffect, Dispatch, SetStateAction } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface PostComponentProps {
  dataPosts: PaginateResponse<PostProps> | undefined
  setDataPosts: Dispatch<SetStateAction<PaginateResponse<PostProps> | undefined>>
}


export function Post({ dataPosts, setDataPosts }: PostComponentProps) {
  const route = useRouter();
  const { data: session } = useSession();
  const { getPosts, createLike } = useApi();

  useEffect(() => {
    if (!session) {
      route.push("/");
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      getPosts(1, 10);
    }
  }, [session]);
 
  if (!session) {
    return null;
  }
    
    const getInitials = (name: string) => {
      const names = name.split(" ");
      if (names.length > 1) {
        return names[0][0].toUpperCase() + names[1][0].toUpperCase();
      }
      return names[0][0];
    }
   
    const calculateTime = (time: string) => {
      const createdDate = new Date(time);
      const now = new Date();
      const diffMs = now.getTime() - createdDate.getTime();

      const msPerMinute = 60 * 1000;
      const msPerHour = 60 * msPerMinute;
      const msPerDay = 24 * msPerHour;
      const msPerWeek = 7 * msPerDay;
      const msPerMonth = 30 * msPerDay;
      const msPerYear = 365 * msPerDay;

      if (diffMs < msPerDay) {
        return "Hoje";
      } else if (diffMs < msPerWeek) {
        const days = Math.floor(diffMs / msPerDay);
        return days === 1 ? "1 dia" : `${days} dias`;
      } else if (diffMs < msPerMonth) {
        const weeks = Math.floor(diffMs / msPerWeek);
        return weeks === 1 ? "1 semana" : `${weeks} semanas`;
      } else if (diffMs < msPerYear) {
        const months = Math.floor(diffMs / msPerMonth);
        return months === 1 ? "1 mês" : `${months} meses`;
      } else {
        const years = Math.floor(diffMs / msPerYear);
        return years === 1 ? "1 ano" : `${years} anos`;
      }
    };

    const getActiveLikeByUser = (likes: LikeProps[]): boolean => {
      const userId = (session?.user as { id?: string })?.id;
      const like = likes.find((like) => like.userId === userId && like.isActive);
      return !!like;
    }

    const handleCreateLike = (postId: string) => {
      createLike(postId)
        .then((response) => {
          setDataPosts(response);
        })
        .catch(() => {
          toast.error("Erro ao criar like", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        });
      }

  return (
    <Container>
      {dataPosts?.total === 0 && (
        <h1 style={{ textAlign: "center", marginTop: 20 }}>
          Nenhum post encontrado
        </h1>
      )}
      {dataPosts && dataPosts?.data.map((post, index) => (
        <>
      <ContentContainer key={post.id}>
        <HeaderContent>
          <InitialName>{getInitials(post.user.name ?? "")}</InitialName>
          <h2>{post.user.name}</h2>
          <span>{calculateTime(post.createdAt)}</span>
        </HeaderContent>
        <PostContent>
          <p>{post.content}</p>
        </PostContent>
      </ContentContainer>
      <LikeContainer>
        <button 
          type="button" 
          className={getActiveLikeByUser(post.likes) ? 'isActive' : ''} 
          onClick={() => handleCreateLike(post.id)}
        >
          <Heart size={20}  />
        </button>
        <span>{post.likesCount} Curtidas</span>
      </LikeContainer>
      { dataPosts.data.length - 1 !== index && <Divider /> }
      </>
      ))}
    </Container>
  );
}