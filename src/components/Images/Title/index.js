/*
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Title = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "snow.webp" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
   return (
     <div style={{width: "100%"}}> 
       <Img fluid={data.myImage.childImageSharp.fluid} />
     </div>
   )
}
 
export default Title
*/
