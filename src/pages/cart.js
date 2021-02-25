import React, { useState, useEffect } from "react"
import { Link, navigate } from 'gatsby'

import styles from './cart.module.css'
import CartItem from '../components/CartItem'

const CartPage = () => {
	const [update, setUpdate] = useState(false)

	useEffect(() => {
        console.log("Updated");
    }, [update]); 

	let cartItems = []
	const localStorageKeys = ''

	let totalItemsPrice = 0;
	let shippingCosts = 0;
	let total = 0;

	if (typeof window !== 'undefined') {
		const localStorageKeys = Object.keys(localStorage)
	
		localStorageKeys.forEach(key => {
			if (key.includes('cartItem')) {
				cartItems.push(JSON.parse(localStorage.getItem(key)))
			}
		})	
	
		totalItemsPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
		shippingCosts = totalItemsPrice * 0.05;
		total = totalItemsPrice + shippingCosts;
	
	}
	
	const removeAll = () => {
		//TODO: ne radi
		if(localStorageKeys !== '' && typeof window !== 'undefined' &&  window.confirm("All items form cart are going to be deleted. Are you sure?")){
			localStorageKeys.forEach(key => {
				if (key.includes('cartItem')) {
					localStorage.removeItem(key)
				}
			})
			navigate(-1)
		}
		return
	}
	

	if(cartItems.length ===0)
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

		<p className={styles.removeButton} onClick={() => removeAll()}> Remove all items from cart? </p>

		<Link to={'/notimplemented'}>
			<bottun className={styles.homeButton}>Proceed to checkout</bottun>
		</Link>

		<bottun className={styles.shopButton} onClick={() => {navigate(-1)}}>Continue shopping</bottun>
	</div>
	
}

export default CartPage
