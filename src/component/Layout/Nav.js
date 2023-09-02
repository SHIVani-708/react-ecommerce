import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import CartButton from "./CartButton";

export default function Nav() {
  return (
    <Navbar expand="lg" className="navbar nav">
      <div>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#Store">Store</Navbar.Brand>
        <Navbar.Brand href="#About">About</Navbar.Brand>
      </div>
      <div>
        <CartButton />
      </div>
    </Navbar>
  );
}
