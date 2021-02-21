import React from 'react'
import { Link } from 'gatsby'

import styles from './style.module.css'
 
const ShopCategory = ({image, title}) => (

    <section className={styles.container}>
        <Link to={'/shop'} state={{category:title}}>
            <div className={styles.imageHalf}>{image}</div>
            <div className={styles.categoryTitle}>
                <h2>{title}</h2>
            </div>
        </Link>
    </section>) 

export default ShopCategory