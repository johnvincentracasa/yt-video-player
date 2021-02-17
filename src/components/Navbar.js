import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import SearchBar from './SearchBar';

function Navbar({ onTermSubmit }) {
  return (
    <div className="ui secondary menu navbar">
      <a className="toc item" href="/">
        <i className="sidebar icon"></i>
      </a>
      <a className="item" href="/">
        <img src={logo} alt="Logo" className="navbar__icon" />
      </a>
      <div className="item navbar__searchBar">
        <SearchBar onTermSubmit={onTermSubmit} />
      </div>
    </div>
  );
}

export default Navbar;
