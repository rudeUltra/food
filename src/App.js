import Header from "./components/Layout/header";
import HeaderCartButton from "./components/Layout/HearCartButton";
import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals"
function App() {
  return (
    <Fragment>
      <Header/>
      <Meals/>
    </Fragment>
  );
}

export default App;
