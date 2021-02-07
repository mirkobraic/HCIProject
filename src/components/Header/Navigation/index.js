import React from 'react'
 
import NavigationTabs from '../NavigationTabs'
import styles from './style.module.css'
 
const Navigation = ({ activeTab }) => (
    <section className={styles.navigation}>
        <NavigationTabs activeTab={activeTab} />
        {/* TODO: add cart */}
    </section>
)
 
export default Navigation
