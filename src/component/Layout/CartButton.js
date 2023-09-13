import React, { Fragment, useContext } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import the cart icon
import "./Nav.css";
import CartContext from "../Store/CartContext";
import {Link} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import AuthContext from "../../store/auth-context";

export default function CartButton(props) {
  const cartctx = useContext(CartContext);
  const authCtx=useContext(AuthContext);
  const numberofCartItem = cartctx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  const isLoggedIn=authCtx.isLoggedIn;
  const logoutHandler = ()=>{
    authCtx.logout();
    if (!isLoggedIn) {
      return <Navigate to="/auth" />;
    }
  }
  return (
    <Fragment>
      {!isLoggedIn && ( <Link to="/auth"> 
     <button>
        Login
      </button>
     </Link>)}

    
     {isLoggedIn && (<Link to="/profile">
      <button>
        Profile
      </button>
     </Link>)}

     {isLoggedIn && (<Link to="/profile">
      <button onClick={logoutHandler}>
        LogOut
      </button>
     </Link>)}

     {isLoggedIn && (<Button variant="dark" className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        Add to Cart
        <span id="count">{numberofCartItem}</span>
      </Button>)}
    </Fragment>
  );
}
