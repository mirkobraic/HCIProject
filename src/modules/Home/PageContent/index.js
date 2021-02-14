import React from 'react'
import styles from './style.module.css'
import Shop from '../Shop'
import Blog from '../Blog'

const PageContent = () => (
	<section className={styles.pageContent}>
		<Shop />
		<Blog />
	</section>)

export default PageContent
