import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink exact to="/" className="navbar-brand">
        Okami Manga Store <img src='./favicon.png' alt='' height={50}></img>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/category/shonen" className="nav-link">
              Shonen
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/seinen" className="nav-link">
              Seinen
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/yaoi" className="nav-link">
              Yaoi
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/drama" className="nav-link">
              Drama
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/sports" className="nav-link">
              Sports
            </NavLink>
          </li>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link">
              <FaShoppingCart /> Cart
            </NavLink>
          </li>
        </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
