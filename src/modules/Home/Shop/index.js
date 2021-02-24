import React from 'react'
import { Link } from 'gatsby'
import { FaAngleDoubleRight } from 'react-icons/fa';
import {IconContext} from "react-icons"

import styles from './style.module.css'

import ShopCategory from '../../../components/ShopCategory'
import Category1 from '../../../components/Images/Category1'
import Category2 from '../../../components/Images/Category2'
import Category3 from '../../../components/Images/Category3'
import Category4 from '../../../components/Images/Category4'


const ShopContent = () => (
	<section className={styles.shopContent}>
		<div className={styles.linkContainer}>
			<Link to={'/shop'}>
				<h1>
					Shop&nbsp;
					<IconContext.Provider value={{style: {'padding-top': "10px"}}}>
						<FaAngleDoubleRight />
					</IconContext.Provider>
				</h1>
			</Link>
		</div>
		<ul className={styles.list}>
			<li>
				<ShopCategory image={<Category1/>} title="Snowboarding"/>
			</li>
			<li>
				<ShopCategory image={<Category2/>} title="Kayaking"/>
			</li>
			<li>
				<ShopCategory image={<Category3/>} title="Mountain biking"/>
			</li>
			<li>
				<ShopCategory image={<Category4/>} title="Surfing"/>
			</li>
		</ul>
	</section>)

export default ShopContent