import React from "react"
import { Link } from 'gatsby'
import styles from './404.module.css'

const NotFoundPage = () => (
  <div className={styles.content}>
    <h1>404</h1>

    <h2>Ayy... nothing here!</h2>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to={'/'}>
        <button className={styles.homeButton}>Home</button>
    </Link>
  </div>
)

export default NotFoundPage
