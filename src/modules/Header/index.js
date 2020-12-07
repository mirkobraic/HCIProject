import React from 'react'

import Logo from '../../components/Logo'
import HeaderNavigation from '../../components/HeaderNavigation'

import styles from './style.module.css'

const Header = props => (
  <>
  <section className={styles.header}>
    <Logo />
    <HeaderNavigation activeTab={props.activeTab}/>
  </section>
  </>
)
export default Header
