import { AlertTriangle, Trash2 } from "lucide-react";

const DeleteConfirmationModal = ({
  isOpen = false,
  onConfirm = () => {},
  onCancel = () => {},
  isDeleting = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50 p-4">
      {/* Modal Box */}
      <div className="w-96 rounded-lg bg-white p-6 shadow-xl">
        {/* Icon & Title Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Xóa tài nguyên</h3>
          </div>
        </div>

        {/* Warning Text */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Bạn có chắc chắn muốn xóa tài nguyên này không? Hành động này không thể hoàn tác.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer disabled:opacity-60"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors cursor-pointer disabled:opacity-60"
          >
            <Trash2 className="h-4 w-4" />
            <span>{isDeleting ? "Đang xóa..." : "Xóa"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
