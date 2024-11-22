import React from "react";

const UserItem = ({ user, onDelete }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <span>
        {user.first_name} {user.last_name}
      </span>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};

export default UserItem;
