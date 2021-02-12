import React from "react"
import { Link } from 'gatsby'

import styles from './cart.module.css'

const CartPage = () => (
	<selection className={styles.pageContent}>
		<Link to={'/'}>
			<bottun className={styles.homeButton}>Proceed to checkout</bottun>
		</Link>

		<Link to={'/shop'}>
			<bottun className={styles.shopButton}>Continue shopping</bottun>
		</Link>
	</selection>
)

export default CartPage
