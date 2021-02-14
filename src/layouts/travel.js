import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
 
import styles from './travel.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const TravelPost = ({ pageContext }) => {
  const { longText, title, image, price, time} = pageContext
 
  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <header>
          <h2>
            {title}
          </h2>
        </header>
        <Img fixed={image.fixed} />
        <article>
            {longText.internal.content}
        </article>
        <span>{price}</span>
        <span>{time}</span>
      </main>
    </HeaderFooterLayout>
  )
}
 
export default TravelPost