import React from 'react'
 
import NavigationTabs from '../NavigationTabs'
import styles from './style.module.css'

/*TODO
- na pocetku je prikazana navigacija za mobilnu verziju
- ako se navigacija za mobilnu verziju zatvori, zatvori se i za desktop
*/

const Navigation = ({ activeTab, isVisible }) => {
    return <section className={styles.navigation} style={!isVisible && typeof window !== `undefined` && window.innerWidth < 768 ? {display: 'none'} : {display: 'block'}}>
        <NavigationTabs activeTab={activeTab} />
    </section>
}
 
export default Navigation
