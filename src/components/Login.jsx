import React, { useState } from "react";
import { login } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState();
  const currentUser = useSelector(state => state.user.isLoggedIn);
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleLogin = () => {
    const flag = Dispatch(login(user));
    if (currentUser) Navigate("/");
    else setMessage("User not found");
  };
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
