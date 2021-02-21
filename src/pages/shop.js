import React, { useState, useEffect } from "react"

import { useForm } from '../hooks/useForm'

import { useStaticQuery, graphql } from "gatsby"

import HeaderFooterLayout from "../layouts/headerFooter"
import HeaderSeparator from '../components/HeaderSeparator'

import Filter from "../components/Filter"
import ShopItems from "../components/ShopItems"
import ShopWrapper from "../components/ShopWrapper"
import { categories } from "../constants/const"
import Search from "../components/Search"

const ShopPage = ({location}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProduct (sort: {fields: rating, order: DESC}) {
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
          brand
          productType
          image {
            fixed(width: 300) {
              src
              srcSet
              srcSetWebp
              srcWebp
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
    }
    `)
  
  const allProducts = data?.allContentfulProduct?.nodes ?? [];

  const [products, setProducts] = useState(allProducts);

  let tmp;
  if (location.state.category)
    tmp = location.state.category
  else
    tmp = ''

  const [filteredValues, setFilteredValues] = useForm({
    category: tmp,
    product_type: '',
    brand: '',
    price_range: 1000,
    search: '',
  })

  useEffect(() => {
    updateProducts()
    // eslint-disable-next-line
  }, [filteredValues])

  const updateProducts = () => {
    const filteredProducts = allProducts.filter(product => 
        (product.category === filteredValues.category || filteredValues.category === '') &&
        (product.productType === filteredValues.product_type || filteredValues.product_type === '') &&
        (product.brand === filteredValues.brand || filteredValues.brand === '') &&
        product.price < filteredValues.price_range &&
        (product.title.toLowerCase().includes(filteredValues.search) || filteredValues.search === '')
      )
    setProducts(filteredProducts);
  }

  return <HeaderFooterLayout activeTab="Shop">
      <HeaderSeparator title="Shop"/>
      <ShopWrapper>
        <Filter 
          categoryName={categories.find(i => i.name === filteredValues.category)} 
          handleChange={setFilteredValues} />
        <Search handleChange={setFilteredValues} />
        <ShopItems products={products} />
      </ShopWrapper>
    </HeaderFooterLayout>
}

export default ShopPage
