import { useState } from "react";
import "./App.css";
import Items from "./component/Items/Items";
import Nav from "./component/Layout/Nav";
import Cart from "./component/Cart/Cart";
import CartProvider from "./component/Store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const HideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={HideCartHandler}/>}
      <Nav onShowCart={showCartHandler}/>
      <h1 className="generics">The Generics</h1>
      <Items/>
    </CartProvider>
  );
}

export default App;
