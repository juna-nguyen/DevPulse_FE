import { useState, useEffect, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FilterSection from "../../components/FilterSection";
import ResourceGrid from "../../components/ResourceGrid";
import AddResourceModal from "../../components/AddResourceModal";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal";
import Footer from "../../components/Footer";
import {
  getResources,
  createResource,
  updateResource,
  deleteResource,
  upvoteResource,
} from "../../api/resourceApi";

const HomePage = () => {
  // A. Quản lý trạng thái (State)
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [sortBy, setSortBy] = useState("newest");

  // Create / Edit Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResource, setEditingResource] = useState(null);

  // 1. Quản lý State cho Delete Modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [resourceToDelete, setResourceToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch Data Function
  const fetchResources = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = {};
      if (searchQuery.trim()) {
        params.search = searchQuery.trim();
      }
      if (activeCategory && activeCategory !== "Tất cả") {
        params.category = activeCategory;
      }
      if (sortBy === "most_upvoted") {
        params.sort = "Most Upvoted";
      }

      const data = await getResources(params);
      setResources(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Lỗi khi tải tài nguyên:", error);
      toast.error("Không thể tải danh sách tài nguyên!");
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, activeCategory, sortBy]);

  // useEffect gọi khi mount và khi searchQuery / activeCategory / sortBy thay đổi
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchResources();
    }, 250); // Debounce cho ô tìm kiếm

    return () => clearTimeout(timer);
  }, [fetchResources]);

  // 2. Logic Xóa
  // Bấm vào icon thùng rác trên card: Chỉ lưu id và mở modal
  const handleDeleteClick = (id) => {
    setResourceToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // Xác nhận xóa trong Modal
  const confirmDelete = async () => {
    if (!resourceToDelete) return;

    setIsDeleting(true);
    try {
      await deleteResource(resourceToDelete);
      toast.success("Xóa tài nguyên thành công!");
      setIsDeleteModalOpen(false);
      setResourceToDelete(null);
      fetchResources();
    } catch (error) {
      console.error("Lỗi khi xóa tài nguyên:", error);
      toast.error("Không thể xóa tài nguyên!");
    } finally {
      setIsDeleting(false);
    }
  };

  // Hủy xóa trong Modal
  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setResourceToDelete(null);
  };

  // Upvote (F3) - Optimistic Update
  const handleUpvote = async (id) => {
    const previousResources = [...resources];

    setResources((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, upvotes: (item.upvotes || 0) + 1 } : item
      )
    );

    try {
      const result = await upvoteResource(id);
      if (result && typeof result.upvotes === "number") {
        setResources((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, upvotes: result.upvotes } : item
          )
        );
      }
      toast.success("Đã upvote tài nguyên thành công!");
    } catch (error) {
      console.error("Lỗi khi upvote:", error);
      setResources(previousResources);
      toast.error("Upvote thất bại, vui lòng thử lại!");
    }
  };

  // Thêm mới / Cập nhật tài nguyên
  const handleSaveResource = async (formData) => {
    try {
      if (editingResource) {
        await updateResource(editingResource._id, formData);
        toast.success("Cập nhật tài nguyên thành công!");
      } else {
        await createResource(formData);
        toast.success("Đăng tài nguyên mới thành công!");
      }
      setIsModalOpen(false);
      setEditingResource(null);
      fetchResources();
    } catch (error) {
      console.error("Lỗi khi lưu tài nguyên:", error);
      toast.error("Có lỗi xảy ra khi lưu tài nguyên!");
      throw error;
    }
  };

  const handleOpenAddModal = () => {
    setEditingResource(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (resource) => {
    setEditingResource(resource);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header / Navigation */}
      <Navbar onOpenAddModal={handleOpenAddModal} />

      {/* Hero Banner with illustration */}
      <Hero />

      {/* Main Content Container */}
      <main className="mx-auto -mt-6 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        {/* Search, Sort & Category Filter Component */}
        <FilterSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Resource Cards Grid Component (with Skeleton & empty state) */}
        <ResourceGrid
          resources={resources}
          isLoading={isLoading}
          onUpvote={handleUpvote}
          onDelete={handleDeleteClick}
          onEdit={handleOpenEditModal}
        />
      </main>

      {/* Create / Edit Resource Modal Component */}
      <AddResourceModal
        isOpen={isModalOpen}
        initialData={editingResource}
        onClose={() => {
          setIsModalOpen(false);
          setEditingResource(null);
        }}
        onSubmit={handleSaveResource}
      />

      {/* 3. Custom Delete Confirmation Modal (Tailwind CSS) */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        isDeleting={isDeleting}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
