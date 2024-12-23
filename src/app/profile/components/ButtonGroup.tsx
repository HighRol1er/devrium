import { Button } from '@/components/ui/button';

export default function ButtonGroup() {
  return (
    <>
      <Button
        variant="ghost"
        className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
      >
        Posts
      </Button>
      <Button
        variant="ghost"
        className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
      >
        Comments
      </Button>
      <Button
        variant="ghost"
        className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
      >
        Bookmark
      </Button>
    </>
  );
}
