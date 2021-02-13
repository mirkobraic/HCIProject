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
            id
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
        <h2>Read our blogposts!</h2>
        <ul className={styles.list}>
          {data.allContentfulBlogPost.nodes.map(node => {
            return (
              <Link to={`/post/${node.id}`}>
                <li>
                  <Img fixed={node.image.fixed} />
                  <h3>{node.title}</h3>
                  <span>{node.shortInfo.internal.content}</span>
                </li>
              </Link>
            )
          })}
        </ul>
      </section>
  )
}
 
export default BlogContainers