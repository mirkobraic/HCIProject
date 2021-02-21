import React from "react"
import { Link } from 'gatsby'

import styles from './style.module.css'
import HomeBlogsContainer from '../HomeBlogsContainer'

const BlogContent = () => (
	<section className={styles.blogContent}>
		<Link to={'/blog'}>
			<h1>Blog >></h1>
		</Link>
		<HomeBlogsContainer />
	</section>)

export default BlogContent
