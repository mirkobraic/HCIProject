import React from 'react'
import { Link } from 'gatsby'

import styles from './style.module.css'

import {myLocalStorage} from '../../../global/helper'
import { navs as navTabs } from '../../../constants/const'
import Cart from '../Cart'


const loggedIn = () => !!myLocalStorage.getItem('loggedIn')

const NavigationBar = ({ activeTab }) => (
    <nav className={styles.navigationBar}>
        {navTabs.map(({tab, to}) => (
            <Link to={to} >
                <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
            </Link>)
        )}

        <Link to={'/login'}>
            <li onClick={loggedIn() ? () => myLocalStorage.removeItem('loggedIn') : () => {}}>
                {loggedIn() ? 'Logout' : 'Login'}
            </li>
        </Link>

        <Cart/>
    </nav>
)

export default NavigationBar
