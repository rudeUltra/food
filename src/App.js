import Header from "./components/Layout/header";
import HeaderCartButton from "./components/Layout/HearCartButton";
import React, { Fragment } from "react";
import { useState } from "react";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";

function App() {
  const[cartShown,setCart]=useState(false);

  const showCart=()=>{
    setCart(true);
  };

  const hideCart=()=>{
    setCart(false);
  };
  return (
    <Fragment>
    {cartShown && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
