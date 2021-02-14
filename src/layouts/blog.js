import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import ReactMarkdown from 'react-markdown'
 
import styles from './blog.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const BlogPost = ({ pageContext }) => {
  const { blogText, title, image} = pageContext
 

  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <header>
          <h2>
            {title}
          </h2>
        </header>
        <Img fixed={image.fixed} />
        <ReactMarkdown children={blogText.internal.content} />
      </main>
    </HeaderFooterLayout>
  )
}
 
export default BlogPost