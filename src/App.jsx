import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import RootLayout from "./components/RootLayout";
import Cart from "./components/Cart";
import Order from "./components/Order";
import AdminLayout from "./components/AdminLayout";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Users from "./components/Users";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPageGlobal from "./components/ErrorPageGlobal";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPageGlobal />,
      children: [
        { index: true, element: <Home /> },
        { path: "cart", element: <Cart />, errorElement: <ErrorPage /> },
        { path: "order", element: <Order />, errorElement: <ErrorPage /> },
        { path: "register", element: <Register />, errorElement: <ErrorPage /> },
        { path: "login", element: <Login />, errorElement: <ErrorPage /> },

        {
          path: "admin",
          element: <AdminLayout />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Users /> },
            { path: "products", element: <Products /> },
             { path: "orders", element: <Orders /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
