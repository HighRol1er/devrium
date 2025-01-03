import { Button } from '@/components/ui/button';
import { useProfileCategoryStore } from '@/store/profileCategory/useProfileStore';

interface IButtonGroupProps {
  userId: string;
}

export default function ButtonGroup({ userId }: IButtonGroupProps) {
  const { setCategory } = useProfileCategoryStore();

  return (
    <>
      <Button
        onClick={() => setCategory('posts')}
        variant="ghost"
        className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
      >
        Posts
      </Button>

      <Button
        onClick={() => setCategory('comments')}
        variant="ghost"
        className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
      >
        Comments
      </Button>

      <Button
        onClick={() => setCategory('bookmark')}
        variant="ghost"
        className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
      >
        Bookmark
      </Button>
    </>
  );
}
