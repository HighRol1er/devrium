import { Skeleton } from '@/components/ui/skeleton';

export default function ProfileSkeleton() {
  return (
    <>
      <div className="flex items-center space-x-4 p-6">
        <Skeleton className="h-16 w-16 rounded-full bg-slate-300" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-slate-300" />
          <Skeleton className="h-4 w-[200px] bg-slate-300" />
        </div>
      </div>
      <Skeleton className="ml-6 h-4 w-[150px] bg-slate-300" />
      <div className="mt-4 flex flex-col justify-center gap-2 pl-6">
        <Skeleton className="h-[160px] w-full bg-slate-300" />
        <Skeleton className="h-[160px] w-5/6 bg-slate-300" />
        <Skeleton className="h-[160px] w-4/6 bg-slate-300" />
      </div>
    </>
  );
}
