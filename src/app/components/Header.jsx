import React from 'react';
import NavBar from './NavBar';
import '../styles/components/header.css';

export default function Header() {
  return (
    <header className="main-header">
      <h1>HRnet</h1>
      <NavBar />
    </header>
  );
}
