import React from 'react';
import { Button } from '@mantine/core';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <div className='NavBarClass'>
      <ul>
        <li><a className="active" href="/"><span>Home</span></a></li>
        <li><a href="/blog"><span>Blog</span></a></li>
        <li><a href="/user"><span>User Profile</span></a></li>
        {isLoggedIn ? (
          // If logged in, show the logout button
          <Button style={{ borderRadius: '20px' }} onClick={onLogout}>
            <h1>Logout</h1>
          </Button>
        ) : (
          // If not logged in, show the login link
          <Link to="/login">
            <Button style={{ borderRadius: '20px' }}>
              <h1>Login</h1>
            </Button>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
