import React from 'react'

import styles from "./style.module.css"

const Filter = () => {
    return (
      <div className={styles.shopFilter}>
        <h2 className={styles.filterTitle}>Filter</h2>
        <div className={styles.filterCard}>
          <p className={styles.filterCardName}>Category</p>
          <span> &gt; </span>
        </div>
        <div className={styles.filterCard}>
          <p className={styles.filterCardName}>Product Type</p>
          <span> &gt; </span>
        </div>
        <div className={styles.filterCard}>
          <p className={styles.filterCardName}>Brand</p>
          <span> &gt; </span>
        </div>
        <div className={styles.filterCard}>
          <p className={styles.filterCardName}>Color</p>
          <span> &gt; </span>
        </div>
        <div className={styles.filterCard}>
          <p className={styles.filterCardName}>Size</p>
          <span> &gt; </span>
        </div>
        <div className={styles.filterCard}>
          <p className={styles.filterCardName}>Price Range</p>
          <span> &gt; </span>
        </div>
      </div>
    )
}

export default Filter
