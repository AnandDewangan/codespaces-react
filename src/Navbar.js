import './Navbar.css';
import React from 'react';

function Navbar() {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 id="logo">Ecommerce Website</h1>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="btn-group flex-wrap">
            <button className="btn btn-primary"><a href="Home">Home</a></button>
            <button className="btn btn-secondary"><a href="About">About</a></button>
            <button className="btn btn-danger"><a href="Product">Product</a></button>
            <button className="btn btn-dark "><a href="Service">Services</a></button>
            <button className="btn btn-success"><a href="Feature">Features</a></button>
          </div>
          </div>
    </div>
  );
}

export default Navbar;