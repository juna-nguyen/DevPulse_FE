import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getResources = async (params = {}) => {
  try {
    const response = await apiClient.get("/resources", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tài nguyên:", error);
    throw error;
  }
};

export const createResource = async (payload) => {
  try {
    const response = await apiClient.post("/resources", payload);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi tạo tài nguyên mới:", error);
    throw error;
  }
};

export const updateResource = async (id, payload) => {
  try {
    const response = await apiClient.put(`/resources/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi cập nhật tài nguyên ID ${id}:`, error);
    throw error;
  }
};

export const deleteResource = async (id) => {
  try {
    const response = await apiClient.delete(`/resources/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi xóa tài nguyên ID ${id}:`, error);
    throw error;
  }
};

export const upvoteResource = async (id) => {
  try {
    const response = await apiClient.patch(`/resources/${id}/upvote`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi upvote tài nguyên ID ${id}:`, error);
    throw error;
  }
};

export default apiClient;
