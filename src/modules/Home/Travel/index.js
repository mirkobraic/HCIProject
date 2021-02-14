import React from "react"
import { Link } from 'gatsby'

import styles from './style.module.css'
import TravelContainer from '../../Travel/TravelContainer'

const TravelContent = () => (
	<section className={styles.travelContent}>
		<Link to={'/travel'}>
			<h1>Travel >></h1>
		</Link>
		<TravelContainer />
	</section>)

export default TravelContent

