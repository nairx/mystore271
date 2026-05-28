import React from "react";
import { useSelector } from "react-redux";
export default function Users() {
  const users = useSelector((state) => state.user.items);
  return (
    <div>
      <h3>Users</h3>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user.name}-{user.email}-{user.role}
          </li>
        ))}
    </div>
  );
}
