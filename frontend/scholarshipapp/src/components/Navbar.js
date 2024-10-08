import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ApplyForm from './ApplyForm';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Scholarship App</Link>
      <ul>
        <li><Link to="/scholarships">Scholarships</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button className="apply-btn" onClick={() => {
          const applyForm = document.getElementById('apply-form');
          applyForm.style.display === 'block' ? 
            applyForm.style.display = 'none' : 
            applyForm.style.display = 'block';
        }}>
          Apply Now
          </button>
      </div>
      <div id="apply-form" style={{display: 'none'}}>
        <ApplyForm />
      </div>
    </nav>
  );
};

export default Navbar;
