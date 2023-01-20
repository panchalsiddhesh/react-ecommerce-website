import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const getData = useSelector((state)=>state.cartReducer.carts);

  return (
    <div className="navbar">
      <Link to="/" className="link">
        <p className="logo">
          My<span className="logo__span">Ecommerce</span>
        </p>
      </Link>
      <div className="navbar__rightLinks">
        <Link to="/products" className="link link__hover">Products</Link>
        <Link to="/cart" className="link link__hover">{`My Cart (${getData.length})`}</Link>
      </div>
    </div>
  );
};

export default Navbar;
