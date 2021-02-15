import React from 'react'
import { Link } from 'gatsby'

import styles from './style.module.css'

import ShopCategory from '../../../components/ShopCategory'
import Category1 from '../../../components/Images/Category1'
import Category2 from '../../../components/Images/Category2'
import Category3 from '../../../components/Images/Category3'
import CategoryMore from '../../../components/Images/CategoryMore'


const ShopContent = () => (
	<section className={styles.shopContent}>
		<Link to={'/shop'}>
			<h1>Shop >></h1>
		</Link>
		<ul className={styles.list}>
			<li>
				<ShopCategory image={<Category1/>} title="Boats and paddle boats"/>
			</li>
			<li>
				<ShopCategory image={<Category2/>} title="Equipment"/>
			</li>
			<li>
				<ShopCategory image={<Category3/>} title="Clothing"/>
			</li>
			<li>
				<ShopCategory image={<CategoryMore/>} title="Show more categories..."/>
			</li>
		</ul>
	</section>)

export default ShopContent