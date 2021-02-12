import React from "react"
import { Link } from 'gatsby'

import styles from './cart.module.css'

const CartPage = () => (
	<div className={styles.pageContent}>
		<h1>Shopping Cart</h1>

		<p>PRODUCTS...</p>
		
		<span>Subtotal</span>
		<span> 17.99</span>
		<br/>

		<span>Shipping costs</span>
		<span> 3.99</span>
		<br/>

		<span className={styles.total}>Total</span>
		<span className={styles.total}> 21.98</span>
		<br/>

		<Link to={'/'}>
			<bottun className={styles.homeButton}>Proceed to checkout</bottun>
		</Link>

		<Link to={'/shop'}>
			<bottun className={styles.shopButton}>Continue shopping</bottun>
		</Link>
	</div>
)

export default CartPage
