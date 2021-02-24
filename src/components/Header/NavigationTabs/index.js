import React from 'react'
import { Link } from 'gatsby'

import styles from './style.module.css'

import { navs as navTabs } from '../../../constants/const'
import Cart from '../CartIcon'


const loggedIn = () => !!localStorage.getItem('loggedIn')

const NavigationBar = ({ activeTab }) => (
    <nav className={styles.navigationBar}>

        {navTabs.map(({tab, to}) => (
            <Link to={to} >
                <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
            </Link>)
        )}

        <Link to={loggedIn() ? '/' : '/login'}>
            <li onClick={loggedIn() ? () => localStorage.removeItem('loggedIn') : () => {}}>
                {loggedIn() ? 'Logout' : 'Login'}
            </li>
        </Link>

        <Link to={'/cart'}>
            <Cart/>
        </Link>

    </nav>
)


export default NavigationBar
