import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Logo</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <input className="form-control me-2" placeholder="Year/Make/Model" />
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">Cart</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light">Boss Zone</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;