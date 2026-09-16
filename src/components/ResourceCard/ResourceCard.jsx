import {
  ThumbsUp,
  ExternalLink,
  Edit2,
  Trash2,
  Calendar,
  Tag,
} from "lucide-react";

const CATEGORY_COLORS = {
  Frontend: "bg-blue-50 text-blue-700 border-blue-200",
  Backend: "bg-emerald-50 text-emerald-700 border-emerald-200",
  DevOps: "bg-amber-50 text-amber-700 border-amber-200",
  AI: "bg-purple-50 text-purple-700 border-purple-200",
  Mobile: "bg-rose-50 text-rose-700 border-rose-200",
  "UI/UX": "bg-pink-50 text-pink-700 border-pink-200",
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
    "bg-indigo-50 text-indigo-700 border-indigo-200";

  const formattedDate = resource.createdAt
    ? new Date(resource.createdAt).toLocaleDateString("vi-VN")
    : "Gần đây";

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50/60">
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
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 transition-colors cursor-pointer"
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
        <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-start justify-between gap-2"
          >
            <span className="line-clamp-2">{resource.title}</span>
            <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-600" />
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
                className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 hover:bg-slate-200"
              >
                <Tag className="h-3 w-3 text-slate-400" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          <span>{formattedDate}</span>
        </div>

        {/* Upvote Button */}
        <button
          type="button"
          onClick={() => onUpvote(resource._id)}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 active:scale-95 cursor-pointer"
        >
          <ThumbsUp className="h-3.5 w-3.5" />
          <span>{resource.upvotes ?? 0}</span>
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
