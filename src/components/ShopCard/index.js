import React from 'react'

import Img from "gatsby-image"

import { Link } from "gatsby"

import styles from './style.module.css';

const index = ({ image, category, title, price, rating, num }) => {

    return (
      <Link to={`/shop/${num}`}>
        <div className={styles.card}>
          <Img className={styles.cardImage} fixed={image}/>

          <div className={styles.cardContent}>
              <p className={styles.cardCategory}>
                {category}
              </p>
              <h3 className={styles.cardTitle}>
                  {title}
              </h3>
              <div className={styles.cardPriceRow}>
                  <h2 className={styles.cardPrice}>
                      <span><b>$ </b></span>{price}
                  </h2>
                  <span className={styles.cardRating}>
                    <span>Rate </span><b>{rating}</b>
                  </span>
              </div>
          </div>
        </div>
      </Link>
    )
}

export default index
