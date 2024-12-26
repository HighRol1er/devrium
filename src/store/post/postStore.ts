import { create } from 'zustand';
import { Post } from '@prisma/client';

export interface IPost extends Post {
  user: {
    tagName: string | null;
    image: string | null;
  };
}

interface PostState {
  posts: IPost[];
  setPosts: (newPosts: IPost[]) => void;
  addPost: (post: IPost) => void;
  updatePost: (id: number, updatedPost: Partial<IPost>) => void;
  removePost: (id: number) => void;
}

const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (newPosts) => set({ posts: newPosts }),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  updatePost: (id, updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      ),
    })),
  removePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));

export default usePostStore;
