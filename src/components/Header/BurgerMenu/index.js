import React from 'react'
import { FaBars } from 'react-icons/fa';

import styles from './style.module.css'

const BurgerMenu = ({ handleBurgerMenuClicked }) => {

	return (
		<div class={styles.burgerMenu} onClick={handleBurgerMenuClicked}>
			<FaBars class={styles.burgerBar} />
		</div>
	)
}

export default BurgerMenu
