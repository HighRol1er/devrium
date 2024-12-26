'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import MarkdownPage from './components/MarkdownPage';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useCreatePost } from './_api/createPostAPI';
// import { useSession } from 'next-auth/react'; // 일단 보류
// create 이후에 또 zustand에 넣어야하나? .a

const createPostSchema = z.object({
  title: z.string().nonempty('title required'),
  markdown: z.string().nonempty('content required'),
});

type CreatePost = z.infer<typeof createPostSchema>;

export default function CreatePostPage() {
  const [selectCategory, setSelectCategory] = useState<string>(''); // 이거 넘길땐 number로 형변환해서 넘기기

  const { mutate, isPending } = useCreatePost();
  // const [title, setTitle] = useState<string>('');
  // const [markdown, setMarkdown] = useState<string>('');

  //hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreatePost>({
    defaultValues: {
      title: '',
      markdown: '',
    },
  });

  const markdownContents = watch('markdown');

  const onSubmitPost: SubmitHandler<CreatePost> = async (data) => {
    const categoryId = Number(selectCategory);
    console.log(data);
    console.log(categoryId);

    if (!categoryId) {
      console.log('select category'); // toast처리
      return;
    }

    mutate(
      { title: data.title, content: data.markdown, categoryId },
      {
        onSuccess: () => {
          alert('Post created successfully!');
        },
        onError: (error) => {
          console.error('Error creating post:', error);
          alert('Failed to create post. Please try again.');
        },
      }
    );
  };

  return (
    <div className="flex h-full w-full p-2">
      {/* Left section */}
      <div className="w-full pr-4 md:w-1/2">
        <form onSubmit={handleSubmit(onSubmitPost)}>
          <Input
            placeholder="Write your title"
            className="mb-2 w-full border border-gray-500 p-3 focus:outline-none"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
            style={{ outline: 'none', boxShadow: 'none' }}
          />
          {errors.title && <span>{errors.title.message}</span>}
          <div className="mb-2 flex justify-end">
            <Select
              value={selectCategory}
              onValueChange={(value) => setSelectCategory(value)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Coderium</SelectItem>
                  <SelectItem value="2">Question</SelectItem>
                  <SelectItem value="3">Crew</SelectItem>
                  <SelectItem value="4">Reference</SelectItem>
                  <SelectItem value="5">Meme</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Textarea
            className="mb-4 h-[70vh] w-full rounded-md border border-gray-500"
            placeholder="Write your 💡 here."
            // value={markdown}
            // onChange={(e) => setMarkdown(e.target.value)}
            id="markdown"
            {...register('markdown', { required: ' Contents required' })}
            style={{ outline: 'none', boxShadow: 'none' }}
          />
          {errors.markdown && <span>{errors.markdown.message}</span>}
          <Button className="w-full rounded-md bg-primary/80 px-4 py-2 font-semibold text-white transition duration-150 hover:bg-primary focus:outline-none">
            Creativity
          </Button>
        </form>
      </div>

      {/* Right section */}
      <div className="hidden h-[80vh] w-1/2 rounded-md border p-5 pl-4 shadow-lg md:block">
        <MarkdownPage markdown={markdownContents} />
      </div>
    </div>
  );
}
