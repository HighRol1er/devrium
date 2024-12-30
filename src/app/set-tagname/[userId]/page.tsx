'use client';

import Logo from '@/public/logo.png';
import Image from 'next/image';
import { TagName } from '@/schema/tagNameSchema';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { SubmitHandler, useForm } from 'react-hook-form';
import { patchTagName } from '@/_api/setTagName/patchTagName';

export default function SetTagNamePage({
  params,
}: {
  params: { userId: string };
}) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TagName>({
    defaultValues: {
      name: '',
    },
  });

  const onSubmitTagName: SubmitHandler<TagName> = async (data) => {
    const tagName = data.name;
    const userId = params.userId;
    console.log('userId>>>', userId);
    console.log('tagName>>>', tagName);
    try {
      const response = await patchTagName(userId, tagName);

      console.log(response); // NOTE: Toast Fn required

      if (response) {
        console.log('Tag name updated successfully:', response);
        router.push('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg p-8 shadow-md">
          <div className="flex justify-center">
            <Image src={Logo} alt="logo" className="h-16 w-16" />
          </div>
          <h2 className="text-center font-semibold">@Tag Name</h2>
          <p className="text-center">
            Please choose your Tag Name.
            <div className="font-semibold text-red-500">
              Once set, it cannot be changed.
            </div>
          </p>
          <form onSubmit={handleSubmit(onSubmitTagName)}>
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
