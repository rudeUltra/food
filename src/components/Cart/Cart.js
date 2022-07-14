import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart=props=>{
    const cartItems=(<ul className={classes['cart-items']}>{[{id:'c1',name:"sushi",amount:2,price:69}].map((item)=>(<li>{item.name}</li>))}</ul>);
    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>69</span>
            </div>
            <div className={classes.actions}>
            <button className={classes['button-alt']}>Close</button>
            <button className={classes.button}>Order UwU</button>
            </div>
        </Modal>
    );
};

export default Cart;