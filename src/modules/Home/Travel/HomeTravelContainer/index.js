import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import styles from './style.module.css'
 
const TravelContainers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTravelPost {
        nodes {
          shortInfo {
            internal {
              content
            }
          }
          title
          num
          price
          time
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
          {data.allContentfulTravelPost.nodes.map(node => {
            return (
              <Link to={`/travel/${node.num}`} className={styles.item}>
                <li>
                  <Img fixed={node.image.fixed} />
                  <p className={styles.containerText}>
                      <p>
                          <h3 className={styles.title}>{node.title}</h3>
                          <span>{node.shortInfo.internal.content}</span>
                      </p>
                      <bottun className={styles.priceBottun}>FROM $ {node.price}</bottun>
                  </p>
                </li>
              </Link>
            )
          })}
        </ul>
      </section>
  )
}
 
export default TravelContainers