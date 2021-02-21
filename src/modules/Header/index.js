import React, { useState } from 'react'
import BurgerMenu from '../../components/Header/BurgerMenu'

import Logo from '../../components/Header/Logo'
import Navigation from '../../components/Header/Navigation'

import styles from './style.module.css'


const Header = (props) => {
  const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		setIsVisible(isVisible => !isVisible);
	}

  return <section className={styles.header}>
    <Logo />
    <BurgerMenu handleBurgerMenuClicked={handleClick} />
    <Navigation activeTab={props.activeTab} isVisible={isVisible} />
  </section>
}
export default Header