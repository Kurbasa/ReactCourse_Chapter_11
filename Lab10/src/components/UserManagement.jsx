import React, { useState } from "react";
import { fetchUsers, deleteUser } from "../apiMethods";
import FilterBox from "./FilterBox";
import UserList from "./UserList";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFetchUsers = async () => {
    try {
      const usersList = await fetchUsers();
      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div>
      <button onClick={handleFetchUsers}>Fetch Users</button>
      <FilterBox filter={filter} onFilterChange={setFilter} />
      <UserList users={filteredUsers} onDelete={handleDeleteUser} />
    </div>
  );
};

export default UserManagement;
