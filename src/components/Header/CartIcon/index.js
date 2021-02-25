import React from 'react'
import styles from './style.module.css'
import { FaShoppingBasket } from 'react-icons/fa';
import {IconContext} from "react-icons"

const Cart = () => {

    let numberOfCartItems=0

    if (typeof window !== 'undefined') {
        const localStorageKeys = Object.keys(localStorage)
        
	    localStorageKeys.forEach(key => {
		    if (key.includes('cartItem') ) {
                numberOfCartItems = numberOfCartItems + JSON.parse(localStorage.getItem(key)).quantity
		    }
	    })
    }
    else{
        numberOfCartItems=0
    }

    let isVisible = {display: 'none'}
    if(numberOfCartItems>0){
        isVisible = {display: 'inline'}
    }

    return <cart className={styles.cart}>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
            <FaShoppingBasket />
        </IconContext.Provider>
        <span style={isVisible} >{numberOfCartItems}</span>
    </cart>

}

export default Cart