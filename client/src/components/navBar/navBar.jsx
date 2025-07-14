import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');

        navigate('/login');
    };

return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Elden Ring Loadouts</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {localStorage.getItem('user') ? (
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}