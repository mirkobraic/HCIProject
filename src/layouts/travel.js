import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import ReactMarkdown from 'react-markdown'
 
import styles from './travel.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const TravelPost = ({ pageContext }) => {
  const { longText, title, image, price} = pageContext
 
  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <p className={styles.textHalf}>
            <h1>{title}</h1>
            <ReactMarkdown children={longText.internal.content} />
            <bottun className={styles.priceBottun}>Book now: {price}</bottun>
        </p>
        <Img className={styles.travelImage} fixed={image.fixed} />
      </main>
    </HeaderFooterLayout>
  )
}
 
export default TravelPost