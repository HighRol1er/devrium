'use client';

import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useGetPostDetail } from '@/services/post/queries/useGetPostDetail';
import PostContent from '@/components/post/PostContent';
import CommentList from '@/components/post/CommentList';
import AddComment from '@/components/post/AddComment';

/**
 * NOTE: 여기도 prefetching하고 catch-all segment써서 해야겠다.
 *
 */

export default function PostDetailPage() {
  const params = useParams();
  // console.log(params);

  const postId = params?.id;
  if (typeof postId !== 'string') {
    return <div>Invalid post ID</div>;
  }
  const { data, isLoading, isError } = useGetPostDetail(postId);

  // console.log(data);

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
