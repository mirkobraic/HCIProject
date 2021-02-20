import React, { useState, useEffect } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

import Search from '../../../components/Search'
 
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

    const allCards = data?.allContentfulBlogPost?.nodes ?? [];
    const [searchTerm, setSearchTerm] = useState('')
    const [travelCards, setTravelCards] = useState(allCards)

    const handleSearch = (e) => {
      setSearchTerm(e.target.value)
    }

    useEffect(() => {
      updateCards()
      // eslint-disable-next-line
    }, [searchTerm])
  
    const updateCards = () => {
      const filteredCards = allCards.filter(card => 
          (card.title.toLowerCase().includes(searchTerm)) || searchTerm === '')
        setTravelCards(filteredCards);
    }
 
    return (
      <section className={styles.container}>
        <div className={styles.searchWrapper}>
          <Search handleChange={handleSearch} />
        </div>
        <ul className={styles.list}>
          {travelCards.map(node => {
            return (
              <Link to={`/blog/${node.num}`}>
                <li>
                  <Img fixed={node.image.fixed} />
                  <p className={styles.containerText}>
                      <h3 className={styles.title}>{node.title}</h3>
                      <span>{node.shortInfo.internal.content}</span>
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