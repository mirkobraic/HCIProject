import React from 'react'
import Img from 'gatsby-image'
 
import styles from './shop.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const ShopItem = ({ pageContext }) => {
  const { price, productInfo, rating, title, category, image, technicalInfo} = pageContext

  return (
    <HeaderFooterLayout  activeTab="Shop">
      <main className={styles.container}>
        <Img className={styles.itemImage} fixed={image.fixed} />
        <p>{price}</p>
        <p>{productInfo.internal.content}</p>
        <p>{rating}</p>
        <p>{title}</p>
        <p>{category}</p>
        <p>{technicalInfo.internal.content}</p>
      </main>
    </HeaderFooterLayout>
  )
}
 
export default ShopItem