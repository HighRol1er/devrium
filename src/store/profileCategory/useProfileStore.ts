import { create } from 'zustand';

type ProfileCategory = 'posts' | 'comments' | 'bookmark';

interface ProfileCategoryState {
  category: ProfileCategory;
  setCategory: (category: ProfileCategory) => void;
}

export const useProfileCategoryStore = create<ProfileCategoryState>((set) => ({
  category: 'posts',
  setCategory: (category) => set({ category }),
}));
