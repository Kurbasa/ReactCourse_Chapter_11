const API_URL = "https://reqres.in/api/users";

export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data.data;
};

export const deleteUser = async (userId) => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
  return true;
};
