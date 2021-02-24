import React from 'react'
import BurgerMenu from '../../components/Header/BurgerMenu'

import Logo from '../../components/Header/Logo'
import Navigation from '../../components/Header/Navigation'

import styles from './style.module.css'


const Header = (props) => {
  return <section className={styles.header}>
    <Logo />
    <BurgerMenu />
    <Navigation activeTab={props.activeTab} />
  </section>
}
export default Header