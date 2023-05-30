import classes from './Checkout.module.css';
import { useRef } from 'react';

const Checkout = (props) => {
    const nameInput=useRef();
    const addressInput=useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    
    //form validation code siu

    //form submitted siu
    const name1=nameInput.current.value;
    const address1=addressInput.current.value;


    //sending data back to the main component to make the API call

    props.onSub({
        name:name1,
        address:address1
    });





    






  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInput
        }/>
      </div>
      <div className={classes.control}>
        <label htmlFor='Address'>Address</label>
        <input type='text' id='Address' ref={addressInput}/>
      </div>
      
      <div className={classes.actions}>
        <button type='button' onClick={props.onClick1}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;