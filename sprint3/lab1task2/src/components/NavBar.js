import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <div>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <link to="/" /><a className="nav-link " href="/">Home</a>
      </li>
      <li className="nav-item">
        <link to="/About" /> <a className="nav-link" href="about">About</a>
      </li>
      <li className="nav-item">
        <link to="/Register" /><a href="Register"><button type="button" className="btn btn-primary">Register</button></a>
      </li>
    </ul>
  </div>
</nav>
</div>

    );
  }
  
  export default Navbar;