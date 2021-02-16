import React from 'react'

import ShopCard from '../ShopCard'

import styles from './style.module.css';

const ShopItems = ({ products }) => {
    return (
      <div className={styles.shopItemsWrapper}>
        {
          products.map((product) => (
            <ShopCard
                key={product.title}
                image={product.image.fixed}
                category={product.category}
                title={product.title}
                price={product.price}
                rating={product.rating}
                num={product.num}
              />
            )
          )
        }
        </div>
    )
}

export default ShopItems
