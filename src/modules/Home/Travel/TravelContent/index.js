import React from "react"
import { Link } from 'gatsby'
import { FaAngleDoubleRight } from 'react-icons/fa';
import {IconContext} from "react-icons"


import styles from './style.module.css'
import HomeTravelContainer from '../HomeTravelContainer'

const TravelContent = () => (
	<section className={styles.travelContent}>
		<div className={styles.linkContainer}>
			<Link to={'/travel'}>
				<h1>
					Travel&nbsp;
					<IconContext.Provider value={{style: {'padding-top': "10px"}}}>
						<FaAngleDoubleRight />
					</IconContext.Provider>
				</h1>
			</Link>
		</div>
		<HomeTravelContainer />
	</section>)

export default TravelContent

