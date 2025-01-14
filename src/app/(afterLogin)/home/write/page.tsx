'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import CategorySelectTrigger from '@/components/write/CategorySelectTrigger';
import EscapeModal from '@/components/write/EscapeModal';
import MarkdownPreview from '@/components/write/MarkdownPreview';
import SubmitBtn from '@/components/write/SubmitBtn';
import { useToast } from '@/hooks/use-toast';
import { useShowModal } from '@/hooks/useShowModal';
import { CreatePost, createPostSchema } from '@/schema/createPostSchema';
import { useCreatePost } from '@/services/write/queries/useCreatePost';
import { uploadImage } from '@/utils/uploadImage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function CreatePostPage() {
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleCategoryChange = useCallback((value: string) => {
    setSelectCategory(value);
  }, []);

  const { toast } = useToast();
  const { showModal, setShowModal, onClickContinue } = useShowModal(imageUrl);
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
      {
        title: data.title,
        content: data.markdown,
        categoryId,
        image: imageUrl,
      },
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

  const handleFileDrop = async (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith('image/')) {
      const uploadedUrl = await uploadImage(file);
      if (uploadedUrl) {
        setImageUrl(uploadedUrl);
      }
      return uploadedUrl;
    }
  };

  useEffect(() => {
    const a = window.history.pushState(null, '', window.location.href);
    console.log(a);
    const handlePopState = () => {
      console.log('popstate triggered');
      setShowModal(true);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="flex h-full w-full p-2">
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
              onDrop={handleFileDrop}
              {...register('markdown', { required: ' Contents required' })}
              style={{ outline: 'none', boxShadow: 'none' }}
            />
          </div>
          <SubmitBtn isPending={isPending} />
        </form>
      </div>

      {/* Right section */}
      <div className="hidden h-[80vh] w-1/2 rounded-md border p-5 pl-4 shadow-lg md:block">
        <MarkdownPreview markdownText={markdownContents} imageUrl={imageUrl} />
      </div>

      {/* Escape Modal */}
      {showModal && (
        <EscapeModal showModal={showModal} onContinue={onClickContinue} />
      )}
    </div>
  );
}
