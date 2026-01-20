import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Home/Logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100" style={{ zIndex: 30 }}>
      <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
        {/* Logo on left */}
        <NavLink className="navbar-brand d-flex align-items-center flex-shrink-0" to="/">
          {logo ? <img src={logo} alt="logo" width="125.83" height="40" /> : null}
        </NavLink>

        {/* Hamburger for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#nav" 
          aria-controls="nav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Center nav items */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/our-story">Our Story</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/location">Location</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news">News</NavLink>
            </li>
          </ul>
          {/* Reserve button for mobile */}
          <div className="d-lg-none w-100 text-center mt-3">
            <NavLink to="/reserve" className="nav-reserve-btn-mobile">
              Reserve a Seat
            </NavLink>
          </div>
        </div>

        {/* Reserve button on right (desktop only) */}
        <NavLink to="/reserve" className="nav-reserve-btn d-none d-lg-flex">
          Reserve a Seat
        </NavLink>
      </div>
    </nav>
  );
}
