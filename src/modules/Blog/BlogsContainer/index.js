import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const BlogContainers = () => {
  const data = useStaticQuery(graphql`
    query {
         allContentfulBlogPost {
          nodes {
            title
            num
            shortInfo{
                internal {
                    content
                }
            }
            blogText{
                internal {
                    content
                }
            }
            author
            date
            image {
              fixed(width: 300) {
                src
                srcSet
                srcSetWebp
                srcWebp
                width
                height
                base64
                aspectRatio
              }
            }
          }
        }
    }`)
 
    return (
      <section className={styles.container}>
        <ul className={styles.list}>
          {data.allContentfulBlogPost.nodes.map(node => {
            return (
              <Link to={`/blog/${node.num}`}>
                <li>
                  <Img fixed={node.image.fixed} />
                  <p className={styles.containerText}>
                      <h3 className={styles.title}>{node.title}</h3>
                      <span>{node.shortInfo.internal.content}</span>
                      <br/>
                      <span className={styles.more}> Learn more...</span>
                  </p>
               </li>
              </Link>
            )
          })}
        </ul>
      </section>
  )
}
 
export default BlogContainers