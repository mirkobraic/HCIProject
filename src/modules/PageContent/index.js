import React from 'react'
import styles from './style.module.css'
import ShopCategory from '../../components/ShopCategory'
import Category1 from '../../components/Images/Category1'
import Category2 from '../../components/Images/Category2'
import Category3 from '../../components/Images/Category3'
import CategoryMore from '../../components/Images/CategoryMore'


const PageContent = () => (
  <section className={styles.pageContent}>
  <h1>SHOP >></h1>
  <div>
    <ShopCategory image={<Category1/>} title="Boats and paddle boats"/>
    <ShopCategory image={<Category2/>} title="Equipment"/>
    <ShopCategory image={<Category3/>} title="Clothing"/>
    <ShopCategory image={<CategoryMore/>} title="Show more categories..."/>
  </div>
 </section>)

export default PageContent
