import { useForm } from "react-hook-form";
import { z as zodValidation } from 'zod'
import { Container, FormContainer, InitialName } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction, type Dispatch } from "react";
import useApi, { PaginateResponse, PostProps } from "@/hooks/use-api";
import { toast } from "react-toastify";

interface WritePostFormProps {
  setDataPosts: Dispatch<SetStateAction<PaginateResponse<PostProps> | undefined>>
}

const WritePostFormSchema = zodValidation.object({
  content: zodValidation.string()
});

export type WritePostFormData = zodValidation.infer<typeof WritePostFormSchema>;

export function WritePost({ setDataPosts }:WritePostFormProps) {
  const { createPost } = useApi();

  const { 
    register, 
    handleSubmit, 
    clearErrors,
  } = useForm<WritePostFormData>({
    resolver: zodResolver(WritePostFormSchema),
  });

  function handleCreateNewPost(data: WritePostFormData) {
    const { content } = data;

    if (!content || content.trim() === '') {
      toast.error('Este campo é obrigatório', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }


    createPost(content)
      .then((response) => {
        setDataPosts(response)
        toast.success('Post criado com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(() => {
        toast.error('Erro ao criar o post', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })

      });
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, triggerSubmit: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const inputValue = e.currentTarget.value.trim();
      if (!inputValue) {
        toast.error('Erro ao criar o post', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })      } else {
        clearErrors('content'); 
        triggerSubmit(); 
      }
    }
  };

  return (
    <Container>
      <InitialName>
          L
        </InitialName>
      <FormContainer 
        onSubmit={handleSubmit(handleCreateNewPost)}
        >
        <input 
          type="text" 
          placeholder="O que está pensando?"
          {...register('content')}
          onKeyDown={(event) => handleKeyDown(event, handleSubmit(handleCreateNewPost))}
          />
      </FormContainer>

    </Container>
  );
}