import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#Store">Store</Navbar.Brand>
        <Navbar.Brand href="#About">About</Navbar.Brand>
      </Navbar>
    </div>
  )
}
