import React from 'react'
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FQA</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
        <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur beatae, quidem itaque velit maiores praesentium sequi, hic, commodi reprehenderit eius minima! Id voluptatum vero tempora iure commodi voluptas dolorum numquam magnam odit inventore, hic culpa dolores consequatur voluptates eos nam.</span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur beatae, quidem itaque velit maiores praesentium sequi, hic, commodi reprehenderit eius minima! Id voluptatum vero tempora iure commodi voluptas dolorum numquam magnam odit inventore, hic culpa dolores consequatur voluptates eos nam.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Lamastore</span>
          <span className='copyright'>c Copyright 2023, All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
