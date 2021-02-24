import React, { useState, useEffect } from "react"
import { Link, navigate } from 'gatsby'

import styles from './cart.module.css'
import CartItem from '../components/CartItem'

const CartPage = () => {
	const [update, setUpdate] = useState(false)

	const localStorageKeys = Object.keys(localStorage)

	let cartItems = []
	localStorageKeys.forEach(key => {
		if (key.includes('cartItem')) {
			cartItems.push(JSON.parse(localStorage.getItem(key)))
		}
	})

	useEffect(() => {
        console.log("Updated");
    }, [update]);

	const totalItemsPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
	const shippingCosts = totalItemsPrice * 0.05;
	const total = totalItemsPrice + shippingCosts;

	if(cartItems.length===0)
		return <div className={styles.pageContent}>
		<h1 className={styles.pageTitle}>Shopping Cart</h1>
		
		<p>Shopping cart is empty!</p>

		<bottun className={styles.shopButton} onClick={() => {navigate(-1)}}>Continue shopping</bottun>
	</div>

	return  <div className={styles.pageContent}>
		<h1 className={styles.pageTitle}>Shopping Cart</h1>
		
		{
			cartItems
				.filter(item => item.quantity > 0)
				.map(item => <CartItem {...item}  key={item.title} setUpdate={setUpdate} update={update} />)
		}

		<p className={styles.sum}>
			<span>Subtotal</span>
			<span>${parseFloat(totalItemsPrice).toFixed(2)}</span>
		</p>

		<p className={styles.sum}>
			<span>Shipping costs</span>
			<span>${parseFloat(shippingCosts).toFixed(2)}</span>
		</p>

		<p className={styles.sum}>
			<span className={styles.total}>Total</span>
			<span className={styles.total}>${parseFloat(total).toFixed(2)}</span>
		</p>

		<Link to={'/'}>
			<bottun className={styles.homeButton}>Proceed to checkout</bottun>
		</Link>

		<bottun className={styles.shopButton} onClick={() => {navigate(-1)}}>Continue shopping</bottun>
	</div>
	
}

export default CartPage
