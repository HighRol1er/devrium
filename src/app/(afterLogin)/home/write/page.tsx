'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CreatePost, createPostSchema } from '@/schema/createPostSchema';
import { useCreatePost } from '@/services/write/queries/useCreatePost';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const MarkdownPage = dynamic(() => import('@/components/write/MarkdownPage'));
const SubmitBtn = dynamic(() => import('@/components/write/SubmitBtn'));
const CategorySelectTrigger = dynamic(
  () => import('@/components/write/CategorySelectTrigger')
);

export default function CreatePostPage() {
  const [selectCategory, setSelectCategory] = useState<string>('');

  const handleCategoryChange = useCallback((value: string) => {
    setSelectCategory(value);
  }, []);

  const { toast } = useToast();
  const { mutate, isPending } = useCreatePost();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreatePost>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: '',
      markdown: '',
    },
  });

  const markdownContents = watch('markdown');

  const onSubmitPost: SubmitHandler<CreatePost> = async (data) => {
    const categoryId = Number(selectCategory);

    if (!categoryId) {
      toast({
        description: 'Select a category.',
      });
      return;
    }

    mutate(
      { title: data.title, content: data.markdown, categoryId },
      {
        onSuccess: () => {
          toast({
            description: 'Post created successfully.',
          });
        },
        onError: (error) => {
          console.error('Error creating post:', error);
          alert();
          toast({
            description: 'Failed to create post. Please try again.',
          });
        },
      }
    );
  };

  return (
    <div className="flex h-full w-full p-2">
      {/* Left section */}
      <div className="w-full pr-4 md:w-1/2">
        <form onSubmit={handleSubmit(onSubmitPost)}>
          {errors.title && (
            <span className="ml-2 text-xs font-semibold text-red-500">
              {errors.title.message}
            </span>
          )}
          <Input
            placeholder="Write your title"
            className="mb-2 w-full border border-gray-500 p-3 focus:outline-none"
            id="title"
            type="text"
            {...register('title', { required: 'Title required!!' })}
            style={{ outline: 'none', boxShadow: 'none' }}
          />

          <div className="mb-2 flex justify-end">
            <CategorySelectTrigger
              value={selectCategory}
              onValueChange={handleCategoryChange}
            />
          </div>
          <div>
            {errors.markdown && (
              <span className="ml-2 text-xs font-semibold text-red-500">
                {errors.markdown.message}
              </span>
            )}
            <Textarea
              className="mb-4 h-[70vh] w-full rounded-md border border-gray-500"
              placeholder="Write your 💡 here."
              id="markdown"
              {...register('markdown', { required: ' Contents required' })}
              style={{ outline: 'none', boxShadow: 'none' }}
            />
          </div>
          <SubmitBtn isPending={isPending} />
        </form>
      </div>

      {/* Right section */}
      <div className="hidden h-[80vh] w-1/2 rounded-md border p-5 pl-4 shadow-lg md:block">
        <MarkdownPage markdown={markdownContents} />
      </div>
    </div>
  );
}
