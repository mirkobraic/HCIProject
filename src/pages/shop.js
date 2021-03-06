import React, { useState, useEffect } from "react"

import { useForm } from '../hooks/useForm'

import { useStaticQuery, graphql } from "gatsby"

import styles from './shop.module.css'

import HeaderFooterLayout from "../layouts/headerFooter"
import HeaderSeparator from '../components/HeaderSeparator'

import Filter from "../components/Filter"
import ShopItems from "../components/ShopItems"
import ShopWrapper from "../components/ShopWrapper"
import { categories } from "../constants/const"
import Search from "../components/Search"
import SortShop from "../components/SortShop"
import PageNumber from "../components/PageNumber"

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
             
        fluid{
          aspectRatio
          base64
          src
          srcSet
          srcSetWebp
          srcWebp
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


  //TODO prikaz u kojoj smo kategoriji
  let tmp = ''
  if (typeof location.state !== 'undefined' && location.state !== null && typeof location.state.category !== 'undefined' ){
    tmp = location.state.category
  }

  const [filteredValues, setFilteredValues] = useForm({
    category: tmp,
    product_type: '',
    brand: '',
    price_range: 2000,
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
        <div className={styles.leftHalf}>
        <Filter 
          categoryName={categories.find(i => i.name === filteredValues.category)} 
          handleChange={setFilteredValues} />
        </div>
        <div className={styles.rightHalf}>
            <p className={styles.searchSort}>
                <Search handleChange={setFilteredValues} />
                <SortShop handleChange={setFilteredValues} />
                
            </p>
            <ShopItems products={products} />
        </div>
        <PageNumber/>
      </ShopWrapper>
    </HeaderFooterLayout>
}

export default ShopPage
