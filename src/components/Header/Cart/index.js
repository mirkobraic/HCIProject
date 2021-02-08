import React from 'react'
import styles from './style.module.css'
import { FaShoppingBasket } from 'react-icons/fa';
import {IconContext} from "react-icons"


const Cart = () => (
    <cart className={styles.cart}>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
            <FaShoppingBasket />
        </IconContext.Provider>
    </cart>
)

export default Cart