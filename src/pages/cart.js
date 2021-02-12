import React from "react"
import { Link } from 'gatsby'

import styles from './cart.module.css'

const CartPage = () => (
	<div className={styles.pageContent}>
		<h1>Shopping Cart</h1>

		<p>PRODUCT 1</p>
		<hr/>
		<p>PRODUCT 2</p>
		<hr/>

		<p>
			<span>Subtotal</span>
			<span> 17.99</span>
		</p>

		<p>
			<span>Shipping costs</span>
			<span> 3.99</span>
		</p>

		<p className={styles.total}>
			<span>Total</span>
			<span> 21.98</span>
		</p>

		<Link to={'/'}>
			<bottun className={styles.homeButton}>Proceed to checkout</bottun>
		</Link>

		<Link to={'/shop'}>
			<bottun className={styles.shopButton}>Continue shopping</bottun>
		</Link>
	</div>
)

export default CartPage
