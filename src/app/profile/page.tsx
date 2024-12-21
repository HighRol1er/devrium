'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';

import { z } from 'zod';

const tagNameSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .nonempty('Name is required'),
});

type TagName = z.infer<typeof tagNameSchema>;

export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TagName>({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<TagName> = () => console.log('confirmed');

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg p-8 shadow-md">
          <div className="flex justify-center">
            <Image src={Logo} alt="Deverium logo" className="h-16 w-16" />
          </div>
          <h2 className="text-center font-semibold">Tag Name</h2>
          <p className="text-center">
            Please choose your Tag Name.
            <div className="font-semibold text-red-500">
              Once set, it cannot be changed.
            </div>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              type="text"
              {...register('name', { required: 'Please enter your Tag Name' })}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <Button className="mt-5 w-full">Confirm</Button>
          </form>
        </div>
      </div>
    </>
  );
}
