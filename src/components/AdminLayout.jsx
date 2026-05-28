import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function AdminLayout() {
  return (
    <div>
      <Link to="/admin">Users</Link>-<Link to="products">Products</Link>-
      <Link to="orders">Orders</Link>
      <hr />
      <Outlet />
    </div>
  );
}
