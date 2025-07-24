export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    setTodos(response.data);
  } catch (err) {
    console.log("Error fetching users:", err.message);
  }
};
