import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="header">
      <div>
        My Store 271
      </div>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="cart">Cart</Link></li>
          <li><Link to="order">Order</Link></li>
          <li><Link to="admin">Admin</Link></li>
          <li><Link to="login">Login</Link></li>
        </ul>
      </div>
    </div>
  )
}
