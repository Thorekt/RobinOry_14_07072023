import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/components/navBar.css';
import logo from '../assets/images/logo.jpg';

/**
 * NavBar component (navigation bar)
 * @description Renders the navigation bar
 * @returns {JSX.Element}
 */
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="navbar-logo" src={logo} alt="Logo" />
          HRnet
        </Link>
        <ul className="nav nav-pills ">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/EmployeeList">Employee List</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
