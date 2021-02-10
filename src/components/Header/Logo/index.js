import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'

const Logo = () => (
    <Link to={'/'}>
        <span className={styles.logoText}>ES</span>
    </Link>
)

export default Logo
