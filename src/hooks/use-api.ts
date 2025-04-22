/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { api } from '@/lib/axios';
import { useRouter } from 'next/router';

export type PaginateResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export interface LikeProps {
  id: string;
  userId: string;
  postId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostProps {
  id: string;
  content: string;
  userId: string;
  likesCount: number;
  user: UserProps
  likes: LikeProps[];
  createdAt: string;
  updatedAt: string;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useApi = () => {
  const route = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState<PaginateResponse<PostProps>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

   const getAuthorizationHeader = (): { [key: string]: string } | undefined => {
    if(session && session.accessToken) {
      return {
        Authorization: `Bearer ${session.accessToken}`,
      };
    }
    route.push("/")
    return undefined;
   }

  const request = async<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: T,
  ): Promise<T> => {
    setLoading(true);
    setError(null);

    if (!session) {
      route.push("/");
      setLoading(false);
      return Promise.resolve([] as T);
    }

    try {
    const response = await api({
      url: endpoint,
      method,
      headers: {
        ...getAuthorizationHeader(),
      },
      data: body || null,
    })
    return response.data;
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const createPost = async (content: string): Promise<PaginateResponse<PostProps>> => {
    try {
      await request<{ content: string }>('/post', 'POST', { content });
      const posts = await request<PaginateResponse<PostProps>>('/post', 'GET');

      setPosts(posts);
      return posts;
    } catch (error) {
      setError('Failed to create post');
      throw error;
    }
  }

  const getPosts = async (page: number, limit: number): Promise<PaginateResponse<PostProps>> => {
    try {
      const posts = await request<PaginateResponse<PostProps>>(`/post?page=${page}&limit=${limit}`, 'GET');
      setPosts(posts);
      return posts;
    } catch (error) {
      setError('Failed to fetch posts');
      throw error;
    }
  }

  const createLike = async (postId: string): Promise<PaginateResponse<PostProps>> => {
    try {
      await request<{ postId: string }>('/post/like', 'POST', { postId });
      const posts = await request<PaginateResponse<PostProps>>('/post', 'GET');

      setPosts(posts);
      return posts;
    } catch (error) {
      setError('Failed to create like');
      throw error;
    }
  }

  const createUser = async (user: CreateUserProps): Promise<void> => {
    try {
      await api.post('/user', user);
      route.push("/");
    } catch (error) {
      setError('Failed to create user');
      throw error;
    }
  }

  return {
    posts,
    loading,
    error,
    createPost,
    getPosts,
    createLike,
    createUser,
  }
}

export default useApi;

