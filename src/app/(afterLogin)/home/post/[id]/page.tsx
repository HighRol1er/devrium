'use client';

// import AddComment from '@/components/post/AddComment';
// import CommentList from '@/components/post/CommentList';
import PostContent from '@/components/post/PostContent';
import { SEO } from '@/lib/seo/SEO';
import { useGetPostDetail } from '@/services/post/queries/useGetPostDetail';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const AddComment = dynamic(() => import('@/components/post/AddComment'));
const CommentList = dynamic(() => import('@/components/post/CommentList'));

export default function PostDetailPage() {
  const params = useParams();
  // const postId = React.use(params);
  // console.log(params);

  const postId = params?.id;
  if (typeof postId !== 'string') {
    return <div>Invalid post ID</div>;
  }
  const { data, isLoading, isError } = useGetPostDetail(postId);
  console.log(data);

  const title = data?.title || 'Devrium Post';

  const desc = data?.content.slice(0, 160) || 'Devrium description';
  //NOTE: 아직 배포전이라서  const currentUrl = "http:.../post/${postId}"

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center">
      <SEO title={title} description={desc} />
      <div className="w-full max-w-3xl items-center rounded-md p-4">
        {data && <PostContent data={data} />}
        <AddComment postId={postId} />
        <CommentList data={data} />
      </div>
    </div>
  );
}
