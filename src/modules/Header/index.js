import React from 'react'

import Logo from '../../components/Header/Logo'
import Navigation from '../../components/Header/Navigation'

import styles from './style.module.css'


const Header = props => (
  <>
  <section className={styles.header}>
    <Logo />
    <Navigation activeTab={props.activeTab}/>
  </section>
  </>
)
export default Header