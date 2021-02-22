import React from 'react'
import styles from './style.module.css'
 
  const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.terms}>
            <li className={styles.title}>
                Terms & Conditions
            </li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>Credit Card Authorization Forms</li>
        </ul>
        <ul className={styles.address}>
            <li className={styles.title}>
                Contact Us
            </li>
            <li>Travel Agency Inc</li>
            <li>34-66 Seinway Street</li>
            <li>Astoria, NY 11103</li>
        </ul>
        <ul className={styles.phone}>
            <li className={styles.title}>
                Phone
            </li>
            <li>Tel. 1-719-6700</li>
            <li>Toll Free 1-800-692-7628</li>
            <li>Fax. 1-719-956-3988</li>
        </ul>
        <ul className={styles.social}>
        </ul>
    </footer>
  )
 
  export default Footer