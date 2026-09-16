import { useEffect, useState } from "react";
import { getResources } from "./services/api/resourceApi";

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResources();
        setResources(data);
      } catch (error) {
        console.log("Chưa gọi được API", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        DevPulse Resources
      </h1>

      <div className="grid gap-4 max-w-3xl">
        {resources.map((item) => (
          <div
            key={item._id}
            className="p-4 bg-white rounded-lg shadow border border-slate-200"
          >
            <h2 className="text-xl font-semibold text-slate-800">
              {item.title}
            </h2>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline text-sm block mt-1"
            >
              {item.url}
            </a>
            <div className="mt-3 flex items-center justify-between">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
                {item.category}
              </span>
              <span className="text-sm text-slate-500 font-medium">
                Upvotes: {item.upvotes}
              </span>
            </div>
          </div>
        ))}

        {resources.length === 0 && (
          <p className="text-slate-500">
            Chưa có dữ liệu. Đang tải hoặc database đang trống...
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
