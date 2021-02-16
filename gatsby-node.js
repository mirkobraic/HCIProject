/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
 
exports.createPages = async ({ graphql, actions }) => {
  const blogRaw = await graphql(`query {
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
          fixed(width: 500) {
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
 
  const blogRes = blogRaw.data.allContentfulBlogPost.nodes
 
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

  const travelRaw = await graphql(`query {
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
            fixed(width: 500) {
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
 
  const travelRes = travelRaw.data.allContentfulTravelPost.nodes
 
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



  const shopRaw = await graphql(`query MyQuery {
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
            fixed(width: 500) {
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
        technicalInfo {
          internal {
            content
          }
        }
      }
    }
  }`)

 const shopRes = shopRaw.data.allContentfulProduct.nodes

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
}