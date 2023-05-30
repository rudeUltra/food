import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './Cartitem';
import Checkout from './Checkout';

import { useState } from 'react';
import React from 'react';
const Cart=props=>{
    const [ischeckout,setCheckout]=useState(false);

   
    const cartCtx=useContext(CartContext);
    const cartItemAddHandler=item=>{
        cartCtx.addItem({...item,amount:1});

    };

    const cartItemRemoveHandler=id=>{
        cartCtx.removeItem(id);
        
    };

    const orderHandler=()=>{
        setCheckout(true);
    };

    





    const cartItems=(<ul className={classes['cart-items']}>{cartCtx.items.map((item)=>(<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>))}</ul>);
    const totalAmount=cartCtx.totalAmount.toFixed(2); //2 decimal places fixed
    const hasItems=cartCtx.items.length>0; //conditional xD

    const [submitted,setSubmit]=useState(false);


    const module= (<div className={classes.actions}>
           
        <button onClick={props.onClose} className={classes['button-alt']}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order UwU</button>}
        
        </div>);


    const submitHandler=async (userData)=>{
        //getting the user data from another component but calling the function in the parent component

        //get user data from form and cart items from Use Context hook Hm

        await fetch('https://food-app-498c1-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',{
            method:'POST',
            body:JSON.stringify({
                //convert it into a JSON object
                orders:cartCtx.items,
                userData:userData
            })
        });
        setSubmit(true);
    };

    const modalContents=<React.Fragment>
        {cartItems}
            <div className={classes.total}>
                <span>Total Amount Pls pay..</span>
                <span>{totalAmount}</span>
            </div>
            {ischeckout && <Checkout onSub={submitHandler} onClick1={props.onClose}></Checkout>}
            {!ischeckout && module}
    </React.Fragment>

    const submitContent=<React.Fragment>
        <p>Order Submitted Successfully thank you!!</p>
        <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button']}>Close</button>
        </div>
        

    </React.Fragment>





    return(
        <Modal>
            {!submitted && modalContents}
            {submitted && submitContent}
            
            
           
        </Modal>
        //hasitems to show order button only if there is 1 element in cart
    );
};

export default Cart;