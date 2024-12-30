'use client';

import { useParams } from 'next/navigation';
import { useGetPostDetail } from '@/_api/postDetail/queries/useGetPostDetail';
import PostContent from '@/components/postDetail/PostContent';
import CommentList from '@/components/postDetail/CommentList';
import AddComment from '@/components/postDetail/AddComment';

export default function PostDetailPage() {
  const params = useParams();
  const postId = params?.id;
  if (typeof postId !== 'string') {
    return <div>Invalid post ID</div>; // 적절한 에러 처리
  }
  const { data, isLoading, isError } = useGetPostDetail(postId);

  console.log(data);

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center">
      <div className="w-full max-w-3xl items-center rounded-md p-4">
        {data && <PostContent data={data} />}

        <AddComment postId={postId} />
        <CommentList data={data} />
      </div>
    </div>
  );
}
