import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-x-5 gap-y-10 custom-size">
      {Array.from({ length: 4 }).map((_, index) => (
        <article
          key={index}
          className="flex flex-col p-5 pb-9 bg-card-bg rounded-[20px] border-[1.5px] border-card-bg w-full"
        >
          {/* Image Skeleton */}
          <div className="relative w-full rounded-[10px] overflow-hidden">
            <Skeleton className="w-full h-[250px] rounded-[10px]" />
          </div>

          {/* Single Tag (matches UI) */}
          <div className="mt-4">
            <Skeleton className="h-8 w-28 rounded-full" />
          </div>

          {/* Title */}
          <Skeleton className="h-5 w-1/2 my-4" />

          {/* Description (longer lines like UI) */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          {/* Button (full rounded like UI) */}
          <div className="mt-6">
            <Skeleton className="w-full h-12 rounded-full" />
          </div>
        </article>
      ))}
    </div>
  );
}
