import React from "react"

import styles from './style.module.css'
import BlogsContainer from '../../Blog/BlogsContainer'

const BlogContent = () => (
	<section className={styles.blogContent}>
		<h1>Blog >></h1>
		<BlogsContainer />
	</section>)

export default BlogContent
