import { Link } from 'react-router-dom'
import React from 'react'
function Navbar() {
  return (
  <>
  <div className="nav nav-tabs">
  <ul class="nav nav-tabs">
    <li class="nav-item mx-1">
      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    </li>
    <li class="nav-item mx-1">
      <Link className='btn btn-info' to="/email">Email</Link>
    </li>
    <li class="nav-item mx-1">
      <Link class="btn btn-warning" to="/todo">ToDo LIST</Link>
    </li>
    <li class="nav-item mx-1">
      <Link class="btn btn-danger" to="/reminder">Reminder</Link>
    </li>
    <li class="nav-item mx-1">
      <Link class="btn btn-dark" to="/contact+us">Contact Us</Link>
    </li>
    <li class="nav-item mx-1">
      <Link class="btn btn-success" to="/about+us">About Us</Link>
    </li>
    
  </ul>
  </div>
    
  </>
  )
}

export default Navbar