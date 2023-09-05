import React, { Fragment } from "react";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header=props=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>Foodys</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
      
        <div className={classes['main-image']}>
            {/* <img src="https://assets.gqindia.com/photos/61b86d441279745aeb605a91/master/pass/top-image-04%20(7).jpg" alt="bruh food"/> */}
            
        </div>
    </Fragment>
};

export default Header;