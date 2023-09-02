import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the cart icon
import './Nav.css'
import CartContext from '../Store/CartContext';

export default function CartButton() {
  const cartctx=useContext(CartContext);
  const numberofCartItem=cartctx.items.reduce((currNum,item) => {
    return currNum + item.amount;
  },0);
  return (
      <Button variant="dark">
        <FontAwesomeIcon icon={faShoppingCart} />
         Add to Cart
         <span id="count">{numberofCartItem}</span>
      </Button>
  )
}
