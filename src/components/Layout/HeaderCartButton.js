import { useContext } from 'react';
import { useEffect } from 'react';
import CartIcon from "../Cart/Carticon";
import CartContext from '../../store/cart-context';
import classes from './HCB.module.css';
import { useState } from 'react';

const HeaderCartButton = (props) => {
  const[btnIsHigh,setBtnHighlighted]=useState(false);
  const cartCtx = useContext(CartContext);
  const {items}=cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses=`${classes.button} ${btnIsHigh ? classes.bump:''}`; //bump animation useefftect so use useEffect
  useEffect(()=>{
    if(items.length==0){
      return;
    }
    setBtnHighlighted(true);

    setTimeout(()=>{
      setBtnHighlighted(false); //big brain way to animate xD
    },300)
    //remove animation class after change so that it gets added again and animates again

  },[items]); //only bump when an item is added

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;