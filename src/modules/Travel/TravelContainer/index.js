import React, { useState, useEffect } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

import Search from '../../../components/Search'

import SortTravel from "../../../components/SortTravel"
import PageNumber from "../../../components/PageNumber"

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
          longText {
            internal {
              content
            }
          }
          title
          num
          price
          startLocation{
            lat
            lon
          }
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

    const allCards = data?.allContentfulTravelPost?.nodes ?? [];
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
          <SortTravel handleChange={handleSearch} />
        </div>
        <ul className={styles.list}>
          {travelCards.map(node => {
            return (
              <Link to={`/travel/${node.num}`} className={styles.item}>
                <li>
                  <Img fixed={node.image.fixed} className={styles.image}/>
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
        <PageNumber/>
      </section>
  )
}
 
export default TravelContainers