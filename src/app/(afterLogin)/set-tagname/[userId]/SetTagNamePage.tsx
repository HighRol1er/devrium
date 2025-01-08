'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { TagName } from '@/schema/tagNameSchema';
import { patchTagName } from '@/services/setTagName/patchTagName';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import Logo from '../../../../../public/logo.png';

export default function SetTagNamePage({ userId }: { userId: string }) {
  const router = useRouter();
  const { update } = useSession();
  const { toast } = useToast();

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
    // const userId = params.userId;
    try {
      const response = await patchTagName(userId, tagName);

      if (response) {
        await update({ tagName }); // 토큰 재발행 요청 (trigger: 'update')
        toast({
          description: 'Tag name created successfully',
        });

        router.push('/home');
      }
    } catch (error) {
      console.log(error);
      toast({
        description: 'Something went wrong',
      });
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
