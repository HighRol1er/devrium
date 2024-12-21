import { Button } from '@/components/ui/button';

export default function ProfileButton({ text }: { text: string }) {
  return (
    <>
      <Button
        type="submit"
        className="w-full rounded bg-purple-600 py-2 font-semibold hover:bg-purple-700"
      >
        {text}
      </Button>
    </>
  );
}
