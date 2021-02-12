import React from "react"
import { Link } from 'gatsby'

import styles from './cart.module.css'

const CartPage = () => (
	<div className={styles.pageContent}>
		<h1 className={styles.pageTitle}>Shopping Cart</h1>
		
		{/*
		TODO:
		product component
		*/}

		<p>PRODUCT 1</p>
		<hr className={styles.productSeparator}/>
		<p>PRODUCT 2</p>
		<hr className={styles.productSeparator}/>

		<p className={styles.sum}>
			<span>Subtotal</span>
			<span> 17.99</span>
		</p>

		<p className={styles.sum}>
			<span>Shipping costs</span>
			<span> 3.99</span>
		</p>

		<p className={styles.sum}>
			<span className={styles.total}>Total</span>
			<span className={styles.total}> 21.98</span>
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
