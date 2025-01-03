import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';

export default function HomeSkeletonUi() {
  return (
    <>
      <div className="flex flex-col items-start gap-1">
        <Skeleton className="h-[230px] w-full bg-slate-300" />
        <Skeleton className="h-[230px] w-5/6 bg-slate-300" />
        <Skeleton className="h-[230px] w-4/6 bg-slate-300" />
        <Loader2 className="animate-spin" />
      </div>
    </>
  );
}
