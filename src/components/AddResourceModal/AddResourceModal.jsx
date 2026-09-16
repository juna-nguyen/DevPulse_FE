import { useState } from "react";
import { X, Plus, Sparkles, Link2, Tag, BookOpen, Layers } from "lucide-react";

const CATEGORIES = ["Frontend", "Backend", "DevOps", "AI", "Mobile", "UI/UX"];

const AddResourceModal = ({
  isOpen = false,
  onClose = () => {},
  onSubmit = () => {},
  initialData = null,
}) => {
  const [formData, setFormData] = useState(() => ({
    title: initialData?.title || "",
    url: initialData?.url || "",
    category: initialData?.category || "",
    tags: Array.isArray(initialData?.tags)
      ? initialData.tags.join(", ")
      : initialData?.tags || "",
    summary: initialData?.summary || "",
  }));
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formattedTags = formData.tags
        .split(",")
        .map((tag) => tag.trim().toLowerCase())
        .filter((tag) => tag.length > 0);

      await onSubmit({
        ...formData,
        tags: formattedTags,
      });
      onClose();
    } catch {
      // Error handled by caller
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity cursor-pointer"
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-xl rounded-3xl border border-pink-200/80 bg-white p-6 shadow-2xl transition-all sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {initialData ? "Chỉnh sửa tài nguyên" : "Thêm tài nguyên mới"}
              </h2>
              <p className="text-xs text-slate-500">
                Chia sẻ tài liệu, bài viết hoặc công cụ hữu ích cho cộng đồng
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-pink-50 hover:text-pink-600 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Tiêu đề tài nguyên <span className="text-rose-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <BookOpen className="h-4 w-4" />
              </div>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="VD: Lộ trình học ReactJS từ cơ bản đến nâng cao"
                className="w-full rounded-xl border border-pink-200 bg-pink-50/40 py-2.5 pr-4 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-100"
              />
            </div>
          </div>

          {/* URL */}
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Đường dẫn URL <span className="text-rose-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Link2 className="h-4 w-4" />
              </div>
              <input
                type="url"
                name="url"
                required
                value={formData.url}
                onChange={handleChange}
                placeholder="https://react.dev"
                className="w-full rounded-xl border border-pink-200 bg-pink-50/40 py-2.5 pr-4 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-100"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Chuyên mục <span className="text-rose-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Layers className="h-4 w-4" />
              </div>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-pink-200 bg-pink-50/40 py-2.5 pr-4 pl-10 text-sm text-slate-800 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-100 cursor-pointer"
              >
                <option value="">Chọn một danh mục...</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Thẻ Tags (phân cách bằng dấu phẩy) <span className="text-rose-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Tag className="h-4 w-4" />
              </div>
              <input
                type="text"
                name="tags"
                required
                value={formData.tags}
                onChange={handleChange}
                placeholder="react, javascript, frontend"
                className="w-full rounded-xl border border-pink-200 bg-pink-50/40 py-2.5 pr-4 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-100"
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Mô tả tóm tắt
            </label>
            <textarea
              name="summary"
              rows={3}
              value={formData.summary}
              onChange={handleChange}
              placeholder="Giới thiệu sơ lược về điểm nổi bật của tài nguyên này..."
              className="mt-1.5 w-full rounded-xl border border-pink-200 bg-pink-50/40 p-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-100"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-pink-100">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-pink-50 cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 rounded-xl bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-pink-200 transition-colors hover:bg-pink-600 disabled:opacity-60 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>{initialData ? "Cập nhật" : "Đăng tài nguyên"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddResourceModal;
