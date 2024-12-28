'use client';

import { useParams } from 'next/navigation';
import { useFetchPostDetail } from '../_api/postDetailAPI';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import PostStats from '../../../../components/home/PostStats';
import PostContent from '@/components/postDetail/PostContent';
import AddComment from '@/components/postDetail/AddComment';
import { User } from 'lucide-react';

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

  const comments = data?.comments || [];

  console.log(data);

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center">
      <div className="w-full max-w-3xl items-center rounded-md p-4">
        {data && <PostContent data={data} />}

        <AddComment postId={postId} />
        <div>
          <h2 className="mb-3 font-semibold">Comments</h2>
          {/* 댓글 달리는 곳 */}
          <div className="mb-2 border-l-4 p-3 shadow-md">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id}>
                  <div className="mb-2 flex gap-2">
                    {comment.user.image ? (
                      <img
                        src={comment.user.image}
                        alt={comment.user.name}
                        className="size-8 rounded-full"
                      />
                    ) : (
                      <User />
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {comment.user.name}
                      </span>
                      <span className="text-[12px] font-semibold text-gray-400">
                        @{comment.user.tagName}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{comment.content}</p>
                  <span className="text-xs text-gray-400">
                    {new Date(comment.createdAt).toLocaleString()}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
