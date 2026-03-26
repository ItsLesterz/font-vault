// src/components/Navbar.js
import React from "react";

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    
    <header className="app-navbar">
      <div className="navbar-brand">
        <span className="navbar-logo-icon">GXS</span>
        <span className="navbar-title">Font Directory</span>
        <span className="navbar-subtitle d-none d-md-inline">
          
        </span>
      </div>

    </header>
  );
}
