import {useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import BrowserRouter, Routes, and Route
import "./App.css";
import Nav from "./component/Layout/Nav";
import Cart from "./component/Cart/Cart";
import CartProvider from "./component/Store/CartProvider";
import About from "./component/Files/About";
import Home from "./component/Files/Home";
import Footer from "./component/Layout/Footer";
import Store from "./component/Files/Store";
import ApiStore from "./component/StoreAPI/StoreAPI"
import ContactUs from "./component/ContactUs/StoreContact";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Router>
      <CartProvider>
        {cartIsShown && <Cart onHideCart={HideCartHandler} />}
        <Nav onShowCart={showCartHandler} />
        <Routes>
          {" "}<Route path="/about" element={<About />} />
          {" "}<Route path="/" element={<Home />} />
          {" "}<Route path="/store" element={<Store />} />
          {" "}<Route path="/api-store" element={<ApiStore />} />
          {" "}<Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
