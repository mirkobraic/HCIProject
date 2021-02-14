import React from 'react'

import { useStaticQuery, graphql } from "gatsby"

import ShopCard from '../ShopCard'

import styles from './style.module.css';

const ShopItems = () => {
    const data = useStaticQuery(graphql`
      query MyQuery {
        allContentfulProduct {
          nodes {
            price
            productInfo {
              internal {
                content
              }
            }
            rating
            title
            num
            category
            image {
              fixed(width: 300) {
                src
                srcSet
                srcSetWebp
                srcWebp
                base64
                aspectRatio
              }
            }
            technicalInfo {
              internal {
                content
              }
            }
          }
        }
      }
    `)

    return (
      <div className={styles.shopItemsWrapper}>
        {
          data.allContentfulProduct.nodes.map((product) => (
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
