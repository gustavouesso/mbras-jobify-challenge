import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingJobs() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Vagas</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-4 border rounded-lg space-y-3 shadow-sm"
          >
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        ))}
      </div>
    </main>
  );
}
