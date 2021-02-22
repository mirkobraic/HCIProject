import React from 'react'
 
import styles from './style.module.css'
 
const HeaderSeparator = ({ title }) => (
  <section className={styles.separator}>
    <h2>{title}</h2>
  </section>
)
 
export default HeaderSeparator
