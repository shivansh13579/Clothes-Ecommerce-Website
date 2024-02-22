import React from 'react'
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi"
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import {Link} from 'react-router-dom';
import "./Navbar.scss"

function Navbar() {
  return (
    <div className='navbar'>
    <div className="wrapper">
      <div className="left">
        <div className='item'>
          <img src="/img/en.png" alt="" />
         <HiChevronDown/>
        </div>
        <div className='item'>
          <span>USD</span>
          <HiChevronDown/>
        </div>
        <div className='item'>
         <Link  classname="link" to="/products/1">Women</Link>
        </div>
        <div className='item'>
         <Link  classname="link" to="/products/2">Men</Link>
        </div>
        <div className='item'>
         <Link  classname="link" to="/products/3">Child</Link>
        </div>
      </div>
      <div className="center">
        <Link  classname="link" to="/">LAMASTORE</Link>
      </div>
      <div className="right">
        <div className="item">
          <Link  classname="link" to="/">Homepage</Link>
        </div>
        <div className="item">
          <Link  classname="link" to="/">About</Link>
        </div>
        <div className="item">
          <Link  classname="link" to="/">Contact</Link>
        </div>
        <div className="item">
          <Link  classname="link" to="/">Store</Link>
        </div>
        <div className="icons">
        <HiOutlineSearch/>
        <HiOutlineUserAdd/>
        <HiOutlineHeart/>
         <div className="cartIcon">
          <HiOutlineShoppingCart/>
          <span></span>
         </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
