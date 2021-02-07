/*
import React from 'react'
 
import styles from './style.module.css'
 
const TitleImage = () => (
    <section className={styles.titleImage}>
        <div>
          <h1>EXTREME SPORTS</h1>
        </div>
    </section>
)
 
export default TitleImage

*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./style.module.css"

const TitleImage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "snow.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      className={styles.titleImage}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div>
        <h1>EXTREME SPORTS</h1>
      </div>
    </BackgroundImage>
  )
}

export default TitleImage