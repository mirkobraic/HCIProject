import React from 'react'

import {myLocalStorage} from '../../global/helper'
import styles from "./style.module.css"

const CartItem = ({ title, price, num, quantity, setUpdate, update }) => {
    
    const item = JSON.parse(myLocalStorage.getItem(`cartItem-${num}`))
 

    const increment = () => {
        item.quantity = item.quantity + 1
        myLocalStorage.setItem(`cartItem-${num}`, JSON.stringify(item))
        setUpdate(update => !update)
    }

    const decrement = () => {
        if (item.quantity === 0) {
            myLocalStorage.removeItem(JSON.stringify(item))
        }
        else{
            item.quantity = item.quantity - 1
            myLocalStorage.setItem(`cartItem-${num}`, JSON.stringify(item))
            setUpdate(update => !update)
        }
    }

    return (
        <>
            <div className={styles.cartItemRow}>
                <h3 className={styles.cartItemTitle}>{title}</h3>
                <div className={styles.cartItemNums}>
                    <span>Price: <b>${price}</b></span>
                    <span>Qty: <b>{quantity}</b></span>
                    <button className={styles.cartButton} onClick={decrement}>-</button>
                    <button className={styles.cartButton} onClick={increment}>+</button>
                </div>
            </div>
            <hr className={styles.productSeparator}/>
        </>
    )
}

export default CartItem
