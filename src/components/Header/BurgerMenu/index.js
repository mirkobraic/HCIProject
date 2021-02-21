import React from 'react'

import styles from './style.module.css'

const BurgerMenu = ({ handleBurgerMenuClicked }) => {

	return (
		<div class={styles.burgerMenu} onClick={handleBurgerMenuClicked}>
			<span id="bar1" class={styles.burgerBar}></span>
			<span id="bar2" class={styles.burgerBar}></span>
			<span id="bar3" class={styles.burgerBar}></span>
		</div>
	)
}

export default BurgerMenu
