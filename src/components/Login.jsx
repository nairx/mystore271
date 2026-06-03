import React, { useEffect, useState } from "react";
import { login } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState();
  const currentUser = useSelector((state) => state.user.isLoggedIn);
  const Dispatch = useDispatch();
  const API = import.meta.env.VITE_API_URL + "/users";
  const Navigate = useNavigate();
  const handleLogin = () => {
    // const flag = Dispatch(login(user));
    const flag = users.find(elem=>elem.email === user.email && elem.password === user.password)
    if (flag) Navigate("/");
    else setMessage("User not found");
  };

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      Login Form
      <p>{message}</p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <button onClick={handleLogin}>Login</button>
      <p>
        <Link to="/register">New User Register Here</Link>
      </p>
    </div>
  );
}
