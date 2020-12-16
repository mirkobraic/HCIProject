import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
const Category1 = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "sup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
   return (
     <div style={{width: "250px", height: "250px"}}> 
       <Img fluid={data.myImage.childImageSharp.fluid} />
     </div>
   )
}
 
export default Category1