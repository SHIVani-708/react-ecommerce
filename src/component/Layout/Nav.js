import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Navbar expand="lg" className="navbar nav">
      <div>
        <Link to="/">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
        </Link>
        <Link to="/about">
          <Navbar.Brand href="#About">About</Navbar.Brand>
        </Link>
        <Link to="/store">
          <Navbar.Brand href="#store">Store</Navbar.Brand>
        </Link>
      </div>
      <div>
        <CartButton />
      </div>
    </Navbar>
  );
}
