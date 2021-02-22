import React from 'react'
import styles from './style.module.css'
import Shop from '../Shop'
import Blog from '../Blog/BlogContent'
import Travel from '../Travel/TravelContent'


const PageContent = () => (
	<section className={styles.pageContent}>
		<Shop />
		<Travel />
		<Blog />
	</section>)

export default PageContent
