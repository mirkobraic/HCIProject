import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./style.module.css"

const TitleImage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "snow.webp" }) {
        childImageSharp {
          fluid{
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