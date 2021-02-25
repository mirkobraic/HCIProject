import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
const Category1 = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "snowboarding.webp" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
   return (
     <div style={{width: "300px", height: "300px"}} > 
       <Img fluid={data.myImage.childImageSharp.fluid} style={{borderRadius: "3px"}}/>
     </div>
   )
}
 
export default Category1