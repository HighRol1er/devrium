'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import CategorySelectTrigger from '@/components/write/CategorySelectTrigger';
import MarkdownPage from '@/components/write/MarkdownPage';
import { useToast } from '@/hooks/use-toast';
import { CreatePost, createPostSchema } from '@/schema/createPostSchema';
import { useCreatePost } from '@/services/write/queries/useCreatePost';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function CreatePostPage() {
  const [selectCategory, setSelectCategory] = useState<string>('');
  const { toast } = useToast();
  //NOTE: method 정리하기
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
          alert('Post created successfully!');
          // NOTE: redirect 작성한 게시글로?
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
            {/**NOTE: component 시키기 */}
            {/* <CategorySelectTrigger value /> */}
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

          <Button
            className={`w-full rounded-md px-4 py-2 font-semibold text-white transition duration-150 ${
              isPending
                ? 'cursor-not-allowed bg-gray-400'
                : 'bg-primary/80 hover:bg-primary'
            }`}
            disabled={isPending}
          >
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
