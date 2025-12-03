import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/directors" className="nav-link">Directors</NavLink>
      <NavLink to="/actors" className="nav-link">Actors</NavLink>
    </nav>
  );
}