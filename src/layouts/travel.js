import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import ReactMarkdown from 'react-markdown'
 
import styles from './travel.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const TravelPost = ({ pageContext }) => {
  const {title, image, price, shortInfo, longText} = pageContext
 
  return (
    <HeaderFooterLayout  activeTab="Travel">
      <main className={styles.container}>
        <Img className={styles.travelImage} fixed={image.fixed} />
        <p className={styles.textHalf}>
            <h1>{title}</h1>
            <bottun className={styles.priceBottun}>Book now from $ {price}</bottun>
            <p>{shortInfo.internal.content}</p>

            <ReactMarkdown children={longText.internal.content} />
        </p>
      </main>
    </HeaderFooterLayout>
  )
}

export default TravelPost