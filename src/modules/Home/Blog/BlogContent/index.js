import React from "react"
import { Link } from 'gatsby'
import { FaAngleDoubleRight } from 'react-icons/fa';
import {IconContext} from "react-icons"


import styles from './style.module.css'
import HomeBlogsContainer from '../HomeBlogsContainer'

const BlogContent = () => (
	<section className={styles.blogContent}>
		<div className={styles.linkContainer}>
			<Link to={'/blog'}>
				<h1>
					Blog&nbsp;
					<IconContext.Provider value={{style: {'padding-top': "10px"}}}>
						<FaAngleDoubleRight />
					</IconContext.Provider>
				</h1>
			</Link>
		</div>
		<HomeBlogsContainer />
	</section>)

export default BlogContent
