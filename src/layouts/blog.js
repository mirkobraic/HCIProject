import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import ReactMarkdown from 'react-markdown'
 
import styles from './blog.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const BlogPost = ({ pageContext }) => {
  const { blogText, title, image, author, date} = pageContext

  return (
    <HeaderFooterLayout  activeTab="Blog">
      <main className={styles.container}>
        <Img className={styles.blogImage} fixed={image.fixed} />
        <p className={styles.textHalf}>
            <h1>{title}</h1>
            <span>{author} {date}</span>
            <ReactMarkdown children={blogText.internal.content} />
        </p>
      </main>
    </HeaderFooterLayout>
  )
}
 
export default BlogPost