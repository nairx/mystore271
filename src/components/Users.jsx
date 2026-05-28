import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/userSlice";
export default function Users() {
  const users = useSelector((state) => state.user.items);
  const Dispatch = useDispatch();
  return (
    <div>
      <h3>Users</h3>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user.name}-{user.email}-{user.role}-
            <button onClick={() => Dispatch(deleteUser(user.email))}>
              Delete
            </button>
          </li>
        ))}
    </div>
  );
}
