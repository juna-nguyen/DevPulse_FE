import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="font-bold text-slate-900">DevPulse</span>
          <span>&copy; {new Date().getFullYear()} - Nền tảng chia sẻ tài nguyên lập trình.</span>
        </div>

        <div className="flex items-center gap-1 text-xs text-slate-500">
          <span>Xây dựng bằng</span>
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
          <span>bởi Senior Frontend Dev</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
