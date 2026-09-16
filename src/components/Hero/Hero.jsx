import { Sparkles, Layers, TrendingUp } from "lucide-react";
import favicon from "../../assets/favicon.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading, description & stats */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              <span>Nền tảng chia sẻ tài nguyên cho Developer</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Khám phá &amp; Chia sẻ{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Tài Nguyên Lập Trình
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Tuyển tập các công cụ, thư viện, tài liệu học tập lập trình đỉnh
              cao được bình chọn bởi cộng đồng developer Việt Nam.
            </p>

            {/* Metric / Stat badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Tài nguyên
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    500+ Khóa học &amp; Tools
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Cộng đồng
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    10k+ Upvotes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic Illustration */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md">
              {/* Soft decorative glow */}
              <div className="absolute -top-6 -left-6 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-200/50">
                <img
                  src={favicon}
                  alt="DevPulse Hero Illustration"
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
