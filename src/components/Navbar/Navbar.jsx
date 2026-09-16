import { Sparkles, Plus } from "lucide-react";

const Navbar = ({ onOpenAddModal = () => {} }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-md shadow-indigo-200">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              Dev<span className="text-indigo-600">Pulse</span>
            </span>
            <span className="ml-2 hidden rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-600 sm:inline-block">
              v1.0
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenAddModal}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-300 active:scale-95 cursor-pointer"
          >
            <Plus className="h-4 w-4 stroke-[2.5]" />
            <span>Thêm tài nguyên</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
