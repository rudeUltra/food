import Header from "./components/Layout/header";
import HeaderCartButton from "./components/Layout/HearCartButton";
import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Fragment>
    <Cart/>
      <Header/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
