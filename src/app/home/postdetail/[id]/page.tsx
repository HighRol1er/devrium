'use client';

import { useParams } from 'next/navigation';
import { useFetchPostDetail } from '../_api/postDetailAPI';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import PostStats from '../../../../components/home/PostStats';
import PostContent from '@/components/postDetail/PostContent';
import AddComment from '@/components/postDetail/AddComment';

/*
댓글 달기 + 댓글 불러오기 
zustand 
// 
*/

export default function PostDetailPage() {
  const params = useParams();
  const postId = params?.id;
  if (typeof postId !== 'string') {
    return <div>Invalid post ID</div>; // 적절한 에러 처리
  }
  const { data, isLoading, isError } = useFetchPostDetail(postId);

  console.log(data);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center">
      <div className="items-center rounded-md">
        {data && <PostContent data={data} />}

        <AddComment postId={postId} />
        <div>
          <h2 className="mb-3 font-semibold">Comments</h2>
          {/* 댓글 달리는 곳 */}
          <div className="mb-2 border-l-4 p-3 shadow-md">
            <p className="">
              Not sure if you kept up on news but the Interchain Foundation
              acquired Skip to form a new entity called Interchain Inc. The goal
              is to enhance product development and integrate efforts within the
              Cosmos ecosystem, focusing on upgrading core components and
              streamlining collaboration. I think 2025 is going to be different
              for Cosmo.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
