import React from "react"
import { Link } from 'gatsby'

import styles from './style.module.css'
import HomeTravelContainer from '../HomeTravelContainer'

const TravelContent = () => (
	<section className={styles.travelContent}>
		<Link to={'/travel'}>
			<h1>Travel >></h1>
		</Link>
		<HomeTravelContainer />
	</section>)

export default TravelContent

