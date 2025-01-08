import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

interface SubmitBtnProps {
  isPending: boolean;
}

export default function SubmitBtn({ isPending }: SubmitBtnProps) {
  return (
    <>
      <Button
        className={`w-full rounded-md px-4 py-2 font-semibold text-white transition duration-150 ${isPending ? 'cursor-not-allowed bg-gray-500' : 'bg-primary'}`}
        disabled={isPending}
      >
        {isPending ? <Loader2 className="animate-spin" /> : 'Creativity'}
      </Button>
    </>
  );
}
