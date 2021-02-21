import React from 'react'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import {Link} from 'gatsby'
import { FaUndo } from 'react-icons/fa';
import {IconContext} from "react-icons"
 
import styles from './travel.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const TravelPost = ({ pageContext }) => {
  const {title, image, price, shortInfo, longText} = pageContext
 
  return (
    <HeaderFooterLayout  activeTab="Travel">
      <main className={styles.container}>
        <Img className={styles.travelImage} fixed={image.fixed} />
        <p className={styles.textHalf}>
            <h1>{title}</h1>
            <p className={styles.bottuns}>
                <Link to={'/travel'}>
                    <bottun className={styles.backBottun}>
                        <IconContext.Provider value={{ style: {color: "white"}}}>
                            <FaUndo />
                        </IconContext.Provider>
                        &nbsp;&nbsp;Go back
                    </bottun>
                </Link>
                <Link to={'/travel'}>
                    <bottun className={styles.priceBottun}>Book now from $ {price}</bottun>
                </Link>
            </p>
            <p>{shortInfo.internal.content}</p>
            <h1>OVERVIEW</h1>
            <ReactMarkdown children={longText.internal.content} />
        </p>
      </main>
    </HeaderFooterLayout>
  )
}

export default TravelPost