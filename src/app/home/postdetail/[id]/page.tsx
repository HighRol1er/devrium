'use client';

import { useParams } from 'next/navigation';
import AddComment from '@/components/postDetail/AddComment';
import PostContent from '@/components/postDetail/PostContent';
import { useGetPostDetail } from '@/_api/postDetail/queries/useGetPostDetail';
import CommentList from '@/components/postDetail/CommentList';

export default function PostDetailPage() {
  const params = useParams();
  const postId = params?.id;
  if (typeof postId !== 'string') {
    return <div>Invalid post ID</div>;
  }
  const { data, isLoading, isError } = useGetPostDetail(postId);

  const comments = data?.comments || [];

  // console.log(data);

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center">
      <div className="w-full max-w-3xl items-center rounded-md p-4">
        {data && <PostContent data={data} />}

        <AddComment postId={postId} />
        <CommentList data={data} />
      </div>
    </div>
    // </div>
  );
}
