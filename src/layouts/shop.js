import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
 
import styles from './shop.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const ShopItem = ({ pageContext }) => {
  const { price, productInfo, rating, title, category, image, technicalInfo, num} = pageContext

  const [quantity, setQuantity] = useState(1)
  const [cartItem, setCartItem] = useLocalStorage(`cartItem-${num}`, {title, price, num, quantity: 0});


  const handleClick = () => {
    alert('Item is added into a shopping cart!')
    setCartItem({title, price, num, quantity: cartItem.quantity + quantity})
  }


  const increment = () => {
    setQuantity(quantity => quantity + 1);
  }

  const decrement = () => {
    if (quantity === 1) {
      return
    }
    setQuantity(quantity => quantity - 1);
  }

  return (
    <HeaderFooterLayout  activeTab="Shop">
      <section className={styles.container}>
        <div className={styles.firstRow}>
            <Img className={styles.itemImage} fluid={image.fluid} />
            <div className={styles.titleHalf}>
                <p className={styles.itemPath}>
                    <Link to={'/shop'}>
                        Shop >&nbsp;
                    </Link>
                    <Link to={'/shop'} state={{category:category}}>
                        {category} >&nbsp;
                    </Link>
                    {title}
                </p>
                <h1>{title}</h1>
                <p><b>$ {price}</b></p>
                <p>Rating {rating}</p>
                <div>
                    <span>Select quantity: </span>
                    <button className={styles.quantity} onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button className={styles.quantity} onClick={increment}>+</button>
                </div>
                <button className={styles.addToCart} onClick={handleClick}>Add to cart</button>
            </div>
        </div>
        <div className={styles.info}>
            <h2>Product Info</h2>
            <ReactMarkdown children={productInfo.internal.content} />
            <h2>Technical Info</h2>
            <ReactMarkdown children={technicalInfo.internal.content} />
        </div>
      </section>
    </HeaderFooterLayout>
  )
}
 
export default ShopItem