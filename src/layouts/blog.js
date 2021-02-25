import React from 'react'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import {Link} from 'gatsby'
import { FaUndo } from 'react-icons/fa';
import {IconContext} from "react-icons"

import styles from './blog.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const BlogPost = ({ pageContext }) => {
  const { blogText, title, image, author, date} = pageContext

  return (
    <HeaderFooterLayout  activeTab="Blog">
      <main className={styles.container}>
        <Img className={styles.blogImage} fluid={image.fluid} />
        <p className={styles.textHalf}>
            <h1>{title}</h1>
            <p className={styles.underTitle}>
                <Link to={'/blog'}>
                    <bottun className={styles.backBottun}>
                        <IconContext.Provider value={{ style: {color: "white"}}}>
                            <FaUndo />
                        </IconContext.Provider>
                        &nbsp;&nbsp;Go back
                    </bottun>
                </Link>
                <span>{author} {date}</span>
            </p>
            <ReactMarkdown className={styles.text} children={blogText.internal.content} />
        </p>
      </main>
    </HeaderFooterLayout>
  )
}
 
export default BlogPost
