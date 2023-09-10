import React,{useContext} from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

export default function Nav() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Navbar expand="lg" className="navbar nav">
      {isLoggedIn && 
      (<div>
        <Link to="/">
          <Navbar.Brand >Home</Navbar.Brand>
        </Link>
        <Link to="/about">
          <Navbar.Brand href="#About">About</Navbar.Brand>
        </Link>
        <Link to="/store">
          <Navbar.Brand href="#store">Store</Navbar.Brand>
        </Link>
        <Link to="/api-store">
          <Navbar.Brand href="#api-store">Movies</Navbar.Brand>
        </Link>
        <Link to="/contactus">
          <Navbar.Brand href="#store">ContactUs</Navbar.Brand>
        </Link>
        
      </div>
      )}
      <div>
        <CartButton />
      </div>
    </Navbar>
  );
}
