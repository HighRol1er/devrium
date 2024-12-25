import { create } from 'zustand';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  userId: string;
  image: string | null;
}

interface PostState {
  posts: Post[];
  setPosts: (newPosts: Post[]) => void;
  addPost: (post: Post) => void;
  updatePost: (id: number, updatedPost: Partial<Post>) => void;
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
