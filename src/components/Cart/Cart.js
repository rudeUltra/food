import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './Cartitem';
const Cart=props=>{
   
    const cartCtx=useContext(CartContext);
    const cartItemAddHandler=item=>{
        cartCtx.addItem({...item,amount:1});

    };

    const cartItemRemoveHandler=id=>{
        cartCtx.removeItem(id);
        
    };





    const cartItems=(<ul className={classes['cart-items']}>{cartCtx.items.map((item)=>(<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>))}</ul>);
    const totalAmount=cartCtx.totalAmount.toFixed(2); //2 decimal places fixed
    const hasItems=cartCtx.items.length>0; //conditional xD



    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount Pls pay..</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button-alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order UwU</button>}
            
            </div>
        </Modal>
        //hasitems to show order button only if there is 1 element in cart
    );
};

export default Cart;