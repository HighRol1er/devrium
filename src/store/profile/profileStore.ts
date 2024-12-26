import { create } from 'zustand';

interface ProfileState {
  profile: {
    image: string | null;
    name: string;
    tagName: string;
    follower: number;
    following: number;
    userId: string;
  };
  sideProfile: {
    createdAt: Date;
    postCount: number;
    commentCount: number;
  };
  setProfile: (profile: {
    image: string | null;
    name: string;
    tagName: string;
    follower: number;
    following: number;
    userId: string;
  }) => void;
  setSideProfile: (sideProfile: {
    createdAt: Date;
    postCount: number;
    commentCount: number;
  }) => void;
  setName: (name: string) => void;
  setImage: (image: string | null) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: {
    image: '',
    name: '',
    tagName: '',
    follower: 0,
    following: 0,
    userId: '',
  },
  sideProfile: {
    createdAt: new Date(),
    postCount: 0,
    commentCount: 0,
  },

  setProfile: (profile) => set({ profile }),
  setSideProfile: (sideProfile) => set({ sideProfile }),
  setName: (name) => set((state) => ({ profile: { ...state.profile, name } })),
  setImage: (image) =>
    set((state) => ({ profile: { ...state.profile, image } })),
}));
