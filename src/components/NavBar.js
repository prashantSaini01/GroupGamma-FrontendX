import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <i className="fas fa-bars"></i>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/edit-profile">Profile</Link></li>
          <li><Link to="/post/1">Post</Link></li>
          <li>Messages</li>
          <li>Notifications</li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        
        
      </div>
      <div className="navbar-right">
        
      <i className="fas fa-search"></i>
      </div>
    </nav>
  );
}

export default NavBar;
