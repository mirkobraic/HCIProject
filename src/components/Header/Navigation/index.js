import React from 'react'
 
import NavigationTabs from '../NavigationTabs'
import styles from './style.module.css'
 

const Navigation = ({ activeTab, isVisible }) => {
    return <section className={styles.navigation} style={!isVisible && window.innerWidth < 768 ? {display: 'none'} : {display: 'block'}}>
        <NavigationTabs activeTab={activeTab} />
    </section>
}
 
export default Navigation
