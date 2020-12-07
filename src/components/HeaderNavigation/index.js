import React from 'react'
 
import NavigationTabs from '../NavigationTabs'
import styles from './style.module.css'
 
const HeaderNavigation = ({ activeTab }) => (
    <section className={styles.navigation}>
        <NavigationTabs activeTab={activeTab} />
    </section>
)
 
export default HeaderNavigation
