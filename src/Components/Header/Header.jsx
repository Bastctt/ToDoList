import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <p className='left'>Made by Bastien Cochet</p>
      <div className='link'>
        <a href="https://github.com/Bastctt" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://Bastctt.github.io/Portfolio" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;

