import {useContext, useState } from "react";
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
import ProductDetails from "./component/Files/ProductDetails";
import Products from "./component/Files/Products";
import Auth from "./pages/AuthPage";
import UserProfile from "./pages/ProfilePage";
import AuthContext from "./store/auth-context";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx=useContext(AuthContext);
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
           <Route path="/auth" element={<Auth />} />
           {authCtx.isLoggedIn && <Route path="/about" element={<About />} />}
           <Route path="/" element={<Home />} />
           {authCtx.isLoggedIn && <Route path="/profile" element={<UserProfile />} />}
           {authCtx.isLoggedIn && <Route path="/product" element={<Home />} />}
          
           {authCtx.isLoggedIn && <Route path="/store" element={<Store />} />}
           {authCtx.isLoggedIn && <Route path="/api-store" element={<ApiStore />} />}
           {authCtx.isLoggedIn && <Route path="/contactus" element={<ContactUs />} />}
           {authCtx.isLoggedIn && <Route path="/products" element={<Products />} />}
           {authCtx.isLoggedIn && <Route path="/products/:productId" element={<ProductDetails />} />}
           <Route path="*" element={<Home/>}/>
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
