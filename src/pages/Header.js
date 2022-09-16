import React from 'react'
import Button from "react-bootstrap/Button";
import style from '../style.css';
import { Routes, Route, Link, NavLink } from "react-router-dom"


function Header() {
  return (
    <div>
        <div class="navbar">
          <img src="./bns.jpeg" alt="logo" class="logo"></img>
          <nav>
            <ul>
              <li> <NavLink to="/">  <a href="#"> ANASAYFA </a></NavLink> </li>
              <li> <NavLink to="/product">  <a href="#"> ÜRÜNLER  </a> </NavLink></li>
              <li> <NavLink to="/about">  <a href="#"> HAKKIMIZDA </a> </NavLink></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Header