'use client';
import { useParams } from 'next/navigation';
import { useFetchPostDetail } from '../_api/postDetailAPI';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function PostDetailPage() {
  const params = useParams();
  const postId = params?.id;
  if (typeof postId !== 'string') {
    return <div>Invalid post ID</div>; // 적절한 에러 처리
  }
  const { data, isLoading, isError } = useFetchPostDetail(postId);

  console.log(data);

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="rounded-md p-6 shadow-md">
        <div className="mb-4 flex items-center">
          <img
            src={data?.user.image as string}
            className="mr-3 h-10 w-10 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{data?.title}</h2>
            <p className="text-sm">{data?.user.name}</p>
          </div>
        </div>
        <div className="max-w-2xl">
          <p className="mb-4">{data?.content}</p>
          <hr className="mb-4" />
          <div className="flex flex-col gap-2">
            <Textarea placeholder="Be Gentle!!" className="h-24" />
            <div className="flex justify-end">
              <Button>Add Comment</Button>
            </div>
          </div>
          <div>
            <h2 className="mb-3 font-semibold">Comments</h2>
            {/* 댓글 달리는 곳 */}
            <div className="mb-2 border-l-4 p-3 shadow-md">
              <p className="">
                Not sure if you kept up on news but the Interchain Foundation
                acquired Skip to form a new entity called Interchain Inc. The
                goal is to enhance product development and integrate efforts
                within the Cosmos ecosystem, focusing on upgrading core
                components and streamlining collaboration. I think 2025 is going
                to be different for Cosmo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
