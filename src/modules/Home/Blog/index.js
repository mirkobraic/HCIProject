import React from "react"
import { Link } from 'gatsby'

import styles from './style.module.css'
import BlogsContainer from '../../Blog/BlogsContainer'

const BlogContent = () => (
	<section className={styles.blogContent}>
		<Link to={'/blog'}>
			<h1>Blog >></h1>
		</Link>
		<BlogsContainer />
	</section>)

export default BlogContent
