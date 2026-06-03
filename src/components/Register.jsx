import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { register } from "../features/userSlice";

export default function Register() {
  const [user, setUser] = useState({});
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL + "/users";
  const handleSubmit = async () => {
    // Dispatch(register({...user,role:"user"}));
    await axios.post(API, user);
    Navigate("/login");
  };
  return (
    <div>
      Registration Form
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <p>
        <Link to="/login">Existing User Login Here</Link>
      </p>
    </div>
  );
}
