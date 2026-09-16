import { Search, ArrowUpDown, Filter } from "lucide-react";

const CATEGORIES = [
  "Tất cả",
  "Frontend",
  "Backend",
  "DevOps",
  "AI",
  "Mobile",
  "UI/UX",
];

const FilterSection = ({
  searchQuery = "",
  onSearchChange = () => {},
  activeCategory = "Tất cả",
  onCategoryChange = () => {},
  sortBy = "newest",
  onSortChange = () => {},
}) => {
  return (
    <div className="space-y-6 rounded-3xl border border-pink-200/80 bg-white p-6 shadow-sm">
      {/* Top row: Search input & Sort dropdown */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Bar */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm kiếm tài nguyên, công cụ, khóa học..."
            className="w-full rounded-2xl border border-pink-200 bg-pink-50/40 py-2.5 pr-4 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-100"
          />
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-2xl border border-pink-200 bg-pink-50/40 px-3.5 py-2 text-sm text-slate-700">
            <ArrowUpDown className="h-4 w-4 text-pink-500" />
            <span className="text-xs font-medium text-slate-500">Sắp xếp:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="newest">Mới nhất</option>
              <option value="most_upvoted">Nhiều upvote nhất</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom row: Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-pink-100">
        <div className="flex items-center gap-1.5 pr-2 text-xs font-semibold uppercase tracking-wider text-pink-400">
          <Filter className="h-3.5 w-3.5" />
          <span>Chuyên mục</span>
        </div>
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-xl px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-pink-500 text-white shadow-sm shadow-pink-200"
                  : "bg-pink-100 text-pink-700 hover:bg-pink-200"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
