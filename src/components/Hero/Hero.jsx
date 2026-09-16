import { Sparkles, Layers, TrendingUp, Code2, Terminal } from "lucide-react";
import faviconImg from "../../assets/favicon.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/80 via-white to-rose-50/50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading, description & stats */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-pink-50/80 px-3.5 py-1.5 text-xs font-semibold text-pink-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-pink-600" />
              <span>Nền tảng chia sẻ tài nguyên cho Developer</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Khám phá &amp; Chia sẻ{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Tài Nguyên Lập Trình
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Tuyển tập các công cụ, thư viện, tài liệu học tập lập trình đỉnh
              cao được bình chọn bởi cộng đồng developer Việt Nam.
            </p>

            {/* Metric / Stat badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white p-3.5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Tài nguyên</p>
                  <p className="text-lg font-bold text-slate-900">500+ Khóa học &amp; Tools</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white p-3.5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Cộng đồng</p>
                  <p className="text-lg font-bold text-slate-900">10k+ Upvotes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic Illustration */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md">
              {/* Soft decorative glow */}
              <div className="absolute -top-6 -left-6 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-3xl border border-pink-100 bg-white p-6 shadow-xl shadow-pink-100/50">
                <div className="flex items-center justify-between border-b border-pink-50 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={faviconImg}
                      alt="DevPulse Logo"
                      className="h-10 w-10 rounded-xl"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        DevPulse Hub
                      </h4>
                      <p className="text-xs text-pink-600 font-medium">
                        Sweet Pastel Pink Edition
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-300"></div>
                    <div className="h-3 w-3 rounded-full bg-pink-300"></div>
                    <div className="h-3 w-3 rounded-full bg-pink-400"></div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 rounded-2xl bg-pink-50/60 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-500 text-white">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 w-3/4 rounded-full bg-pink-200"></div>
                      <div className="mt-1.5 h-2 w-1/2 rounded-full bg-pink-100"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-rose-50/60 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-500 text-white">
                      <Terminal className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 w-2/3 rounded-full bg-rose-200"></div>
                      <div className="mt-1.5 h-2 w-1/3 rounded-full bg-rose-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
