import {
  ThumbsUp,
  ExternalLink,
  Edit2,
  Trash2,
  Calendar,
  Tag,
} from "lucide-react";

const CATEGORY_COLORS = {
  Frontend: "bg-pink-50 text-pink-700 border-pink-200",
  Backend: "bg-rose-50 text-rose-700 border-rose-200",
  DevOps: "bg-pink-50 text-pink-800 border-pink-200",
  AI: "bg-rose-50 text-rose-800 border-rose-200",
  Mobile: "bg-pink-100/70 text-pink-700 border-pink-200",
  "UI/UX": "bg-rose-100/70 text-rose-700 border-rose-200",
};

const ResourceCard = ({
  resource,
  onUpvote,
  onDelete,
  onEdit,
}) => {
  if (!resource) return null;

  const categoryStyle =
    CATEGORY_COLORS[resource.category] ||
    "bg-pink-50 text-pink-700 border-pink-200";

  const formattedDate = resource.createdAt
    ? new Date(resource.createdAt).toLocaleDateString("vi-VN")
    : "Gần đây";

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-pink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100/60">
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-2">
          {/* Category Tag */}
          <span
            className={`inline-flex items-center rounded-xl border px-3 py-1 text-xs font-semibold ${categoryStyle}`}
          >
            {resource.category || "General"}
          </span>

          {/* Action Menu (Edit / Delete) */}
          <div className="flex items-center gap-1 opacity-80 transition-opacity group-hover:opacity-100">
            {onEdit && (
              <button
                type="button"
                onClick={() => onEdit(resource)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-pointer"
                title="Chỉnh sửa"
              >
                <Edit2 className="h-4 w-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => onDelete(resource._id)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
              title="Xóa"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-pink-600">
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-start justify-between gap-2"
          >
            <span className="line-clamp-2">{resource.title}</span>
            <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-pink-600" />
          </a>
        </h3>

        {/* URL preview */}
        <p className="mt-1 text-xs font-medium text-slate-400 truncate">
          {resource.url}
        </p>

        {/* Summary Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {resource.summary || "Không có mô tả chi tiết cho tài nguyên này."}
        </p>

        {/* Tags */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {resource.tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="inline-flex items-center gap-1 rounded-lg bg-pink-50/80 px-2.5 py-0.5 text-[11px] font-medium text-pink-700 hover:bg-pink-100"
              >
                <Tag className="h-3 w-3 text-pink-400" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-pink-50 pt-4">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          <span>{formattedDate}</span>
        </div>

        {/* Upvote Button */}
        <button
          type="button"
          onClick={() => onUpvote(resource._id)}
          className="flex items-center gap-2 rounded-xl border border-pink-100 bg-pink-50/50 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-pink-300 hover:bg-pink-100 hover:text-pink-700 active:scale-95 cursor-pointer"
        >
          <ThumbsUp className="h-3.5 w-3.5 text-pink-500" />
          <span>{resource.upvotes ?? 0}</span>
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
