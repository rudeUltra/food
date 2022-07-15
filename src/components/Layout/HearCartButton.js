import React from "react";
import CartIcon from "../Cart/Carticon";
import classes from './HCB.module.css';
const HeaderCartButton=props=>{
    return <button className={classes.button} onClick={props.Click}>
    <span className={classes.icon}>
    <CartIcon/>
    </span>
    <span>
    Your Cart
    </span>
    <span className={classes.badge}>
    69 xD</span>
</button>
  
};

export default HeaderCartButton;