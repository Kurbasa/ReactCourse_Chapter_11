import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onDelete }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default UserList;
