import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link className="main-nav-item" to="/">Home</Link>
        </li>
        <li>
          <Link className="main-nav-item" to="/EmployeeList">Employee List</Link>
        </li>
      </ul>
    </nav>
  );
}
