import { Container, Form } from "@/styles/pages/entrances";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z as zodValidation } from 'zod'
import useApi from "@/hooks/use-api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const SignUpFormSchema = zodValidation.object({
  name: zodValidation.string(),
  email: zodValidation.string().email({ message: "Email inválido" }),
  password: zodValidation.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  confirmPassword: zodValidation.string().min(6, { message: "Confirmação de senha deve ter pelo menos 6 caracteres" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export type SignUpFormData = zodValidation.infer<typeof SignUpFormSchema>;

export default function SignUp() {
  const router = useRouter();
  const { createUser } = useApi();


  const { register, handleSubmit,  formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
  });
  const onSubmit = (data: SignUpFormData) => { 

    createUser(data)
      .then(() => {
        toast.success('Conta criada com sucesso!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        toast.info('Agora faça o login', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        router.push("/");
      })
      .catch(() => {
        toast.error('Erro ao criar conta', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      });
  };


  return (
    <Container>
      <h1>Inscreva-se na sua conta</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          placeholder="Seu nome" 
          required 
          {...register('name', { required: true })}
          className={errors.name ? 'error' : ''}
          />
        <input 
          type="email"  
          placeholder="Seu email" 
          required 
          {...register('email', { required: true })}
          className={errors.email ? 'error' : ''}
          />
        <input 
          type="password" 
          placeholder="Criar senha" 
          required 
          {...register('password', { required: true, minLength: 6 })}
          className={errors.password ? 'error' : ''}
          />
        <input 
          type="password" 
          placeholder="Confirmar senha" 
          required 
          {...register('confirmPassword', { required: true, minLength: 6 })}
          className={errors.confirmPassword ? 'error' : ''}
          />
        <button type="submit">Registrar</button>
      </Form>
      <Link href="/">
        <span>Já tem conta? Faça o login</span>
      </Link>
    </Container>
  )
}