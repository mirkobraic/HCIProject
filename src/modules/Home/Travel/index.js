import React from "react"

import styles from './style.module.css'
import TravelContainer from '../../Travel/TravelContainer'

const TravelContent = () => (
	<section className={styles.travelContent}>
		<h1>Travel >></h1>
		<TravelContainer />
	</section>)

export default TravelContent
