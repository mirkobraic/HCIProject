import React from 'react'
import styles from './style.module.css'
import { FaShoppingBasket } from 'react-icons/fa';
import {IconContext} from "react-icons"
//import {localStorage} from '../../../global/helper'

const Cart = () => {
    
    const localStorageKeys = Object.keys(localStorage)
    let numberOfCartItems=0
	localStorageKeys.forEach(key => {
		if (key.includes('cartItem') ) {
            numberOfCartItems = numberOfCartItems + JSON.parse(localStorage.getItem(key)).quantity
			//cartItems.push(JSON.parse(localStorage.getItem(key)))
		}
	})

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