import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingJob() {
  return (
    <main className="p-6 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-3 w-1/4" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <Skeleton className="h-10 w-40 rounded-lg" />
    </main>
  );
}
