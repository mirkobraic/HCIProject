import React from 'react'
 
import NavigationTabs from '../NavigationTabs'
import styles from './style.module.css'

//TODO na pocetku je prikazana navigacija za mobilnu verziju
const visibility = (isVisible) => {

    if (typeof window !== `undefined` && isVisible == false && window.innerWidth < 768) {
        return {display: 'none'}
    }
    else
        return  {display: 'block'}
}

const Navigation = ({ activeTab, isVisible }) => {
    return <section className={styles.navigation} style={visibility(isVisible)}>
        <NavigationTabs activeTab={activeTab} />
    </section>
}
 
export default Navigation
