import ResourceCard, { ResourceCardSkeleton } from "../ResourceCard";
import { FolderSearch } from "lucide-react";

const ResourceGrid = ({
  resources = [],
  isLoading = false,
  onUpvote = () => {},
  onDelete = () => {},
  onEdit,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ResourceCardSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (!resources || resources.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-pink-200 bg-white p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
          <FolderSearch className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-base font-bold text-slate-800">
          Không tìm thấy tài nguyên nào
        </h3>
        <p className="mt-1 max-w-sm text-sm text-slate-500">
          Thử thay đổi từ khóa tìm kiếm hoặc chọn chuyên mục khác để xem thêm tài nguyên.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((item) => (
        <ResourceCard
          key={item._id}
          resource={item}
          onUpvote={onUpvote}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ResourceGrid;
