import React from 'react'
import styles from './style.module.css'
 
const ShopCategory = ({image, title}) => (

    <section className={styles.container}>
        <div className={styles.imageHalf}>{image}</div>
        <div className={styles.categoryTitle}>
            <h2>{title}</h2>
        </div>
    </section>) 

export default ShopCategory