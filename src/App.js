import Header from "./components/Layout/header";

import React, { Fragment } from "react";
import { useState } from "react";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const[cartShown,setCart]=useState(false);

  const showCart=()=>{
    setCart(true);
  };

  const hideCart=()=>{
    setCart(false);
  };
  return (
    <div>
    <CartProvider>
    {cartShown && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>

    </div>
    
  );
}

export default App;
