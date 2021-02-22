import React, { useState, useEffect } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'


import Search from '../../../components/Search'
import SortBlog from "../../../components/SortBlog"
import PageNumber from "../../../components/PageNumber"

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
        <p className={styles.searchWrapper}>
          <Search handleChange={handleSearch} />
          <SortBlog handleChange={handleSearch} />
        </p>
        <ul className={styles.list}>
          {travelCards.map(node => {
            return (
              <Link to={`/blog/${node.num}`}>
                <li>
                  <Img fixed={node.image.fixed} />
                  <p className={styles.containerText}>
                      <p>
                      <h3 className={styles.title}>{node.title}</h3>
                      <span>{node.shortInfo.internal.content}</span>
                      </p>
                  </p>
               </li>
              </Link>
            )
          })}
        </ul>
        <PageNumber/>
      </section>
  )
}
 
export default BlogContainers