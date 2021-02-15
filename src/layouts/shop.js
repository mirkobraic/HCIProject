import React from 'react'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
 
import styles from './shop.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const ShopItem = ({ pageContext }) => {
  const { price, productInfo, rating, title, category, image, technicalInfo} = pageContext

  return (
    <HeaderFooterLayout  activeTab="Shop">
      <main className={styles.container}>
        <div className={styles.firstRow}>
            <Img className={styles.itemImage} fixed={image.fixed} />
            <p className={styles.titleHalf}>
                <p className={styles.itemPath}>Shop > {category} > {title}</p>
                <h1>{title}</h1>
                <p>$ {price}</p>
                <p>Rating {rating}</p>
                <p>
                    <span>Select quantity: </span>
                    <bottun className={styles.quantity}>-</bottun>
                    <span>1</span>
                    <bottun className={styles.quantity}>+</bottun>
                </p>
                <bottun className={styles.addToCart}>Add to cart</bottun>
            </p>
        </div>
        <div className={styles.info}>
            <h2>Product Info</h2>
            <ReactMarkdown children={productInfo.internal.content} />
            <h2>Technical Info</h2>
            <ReactMarkdown children={technicalInfo.internal.content} />
        </div>
      </main>
    </HeaderFooterLayout>
  )
}
 
export default ShopItem