import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/components/navBar.css';
import logo from '../assets/images/logo.jpg';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <image className="" src={logo} alt="Logo" />
          HRnet
        </Link>
        <ul className="nav nav-pills ">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/EmployeeList">Employee List</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
