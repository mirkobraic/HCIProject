/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
 const raw = await graphql(`query {
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
            fluid{
              src
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
              sizes
            }
        }
      }
    }
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
            fluid{
              src
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
              sizes
            }
          }
        }
      }
      allContentfulProduct {
      nodes {
        price
        productInfo {
          internal {
            content
          }
        }
        rating
        title
        num
        category
        image {
            fluid {
              src
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
              sizes
            }
        }
        technicalInfo {
          internal {
            content
          }
        }
      }
    }
  }`)

  const blogRes = raw.data.allContentfulBlogPost.nodes
 
  blogRes.forEach((e, index, array) => actions.createPage({
    component: path.resolve(`./src/layouts/blog.js`),
    context: {
      ...e,
      next: index < array.length ? array[index + 1] : null,
      prev: index > 0 ? array[index - 1] : null
    },
    path: `blog/${e.num}`,
    id: `blog/${e.num}`
    }))

 const shopRes = raw.data.allContentfulProduct.nodes

 shopRes.forEach((e, index, array) => actions.createPage({
   component: path.resolve(`./src/layouts/shop.js`),
   context: {
     ...e,
     next: index < array.length ? array[index + 1] : null,
     prev: index > 0 ? array[index - 1] : null
   },
   path: `shop/${e.num}`,
   id: `shop/${e.num}`
   }))

  const travelRes = raw.data.allContentfulTravelPost.nodes
 
  travelRes.forEach((e, index, array) => actions.createPage({
    component: path.resolve(`./src/layouts/travel.js`),
    context: {
      ...e,
      next: index < array.length ? array[index + 1] : null,
      prev: index > 0 ? array[index - 1] : null
    },
    path: `travel/${e.num}`,
    id: `travel/${e.num}`
  }))
}