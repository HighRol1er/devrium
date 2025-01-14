import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { deletePost } from '@/services/post/postService';

interface DeleteBtnProps {
  postId: string | undefined;
}

export default function DeleteBtn({ postId }: DeleteBtnProps) {
  const onClickDeletePost = async () => {
    if (!postId) {
      throw new Error('post not exist');
    }
    const response = await deletePost(postId);
    alert('Post deleted success');
    console.log(response);
  };

  return (
    <Button onClick={onClickDeletePost} variant="destructive">
      <Trash2 />
      Delete Post
    </Button>
  );
}
