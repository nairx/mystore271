import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div>Registration Form
      <p><input type="text" placeholder='Name' /></p>
      <p><input type="text" placeholder='Email' /></p>
      <p><input type="password" placeholder='Password' /></p>
      <button>Submit</button>
      <p>
        <Link to="/login">Existing User Login Here</Link>
      </p>
       </div>
  )
}
