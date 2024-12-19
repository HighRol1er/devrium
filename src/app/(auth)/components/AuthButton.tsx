import { Button } from '@/components/ui/button';

export default function AuthButton({ text }: { text: string }) {
  return (
    <>
      <Button
        type="submit"
        className="w-full py-2 font-semibold text-white bg-purple-600 rounded hover:bg-purple-700"
      >
        {text}
      </Button>
    </>
  );
}
