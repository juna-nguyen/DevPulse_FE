const ResourceCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-pink-100 bg-white p-6 shadow-sm animate-pulse">
      <div>
        {/* Category & Action icons skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 rounded-xl bg-pink-100/70"></div>
          <div className="flex gap-2">
            <div className="h-7 w-7 rounded-lg bg-pink-100/70"></div>
            <div className="h-7 w-7 rounded-lg bg-pink-100/70"></div>
          </div>
        </div>

        {/* Title skeleton */}
        <div className="mt-4 space-y-2">
          <div className="h-5 w-4/5 rounded-md bg-pink-100/70"></div>
          <div className="h-5 w-2/3 rounded-md bg-pink-100/70"></div>
        </div>

        {/* URL preview skeleton */}
        <div className="mt-2 h-3.5 w-1/2 rounded bg-pink-100/70"></div>

        {/* Summary skeleton */}
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded bg-pink-100/70"></div>
          <div className="h-4 w-11/12 rounded bg-pink-100/70"></div>
          <div className="h-4 w-3/4 rounded bg-pink-100/70"></div>
        </div>

        {/* Tags skeleton */}
        <div className="mt-4 flex gap-2">
          <div className="h-5 w-14 rounded-lg bg-pink-100/70"></div>
          <div className="h-5 w-16 rounded-lg bg-pink-100/70"></div>
          <div className="h-5 w-12 rounded-lg bg-pink-100/70"></div>
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="mt-6 flex items-center justify-between border-t border-pink-50 pt-4">
        <div className="h-4 w-24 rounded bg-pink-100/70"></div>
        <div className="h-8 w-16 rounded-xl bg-pink-100/70"></div>
      </div>
    </div>
  );
};

export default ResourceCardSkeleton;
