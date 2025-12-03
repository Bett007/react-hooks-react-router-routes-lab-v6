import { NavLink } from "react-router-dom";
import "./NavBar.css";

// ;me: tests expect the wrapper to have className "navbar"
// NavLink order must be: Home, Actors, Directors (per tests)
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/actors" className="nav-link">
        Actors
      </NavLink>
      <NavLink to="/directors" className="nav-link">
        Directors
      </NavLink>
    </nav>
  );
}

export default NavBar;
