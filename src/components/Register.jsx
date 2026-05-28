import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../features/userSlice";

export default function Register() {
  const [user, setUser] = useState({});
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Dispatch(register({...user,role:"user"}));
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
