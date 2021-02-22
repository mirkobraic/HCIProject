import React from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

import styles from "./headerFooter.module.css"
 
const HeaderFooterLayout = ({ children, activeTab }) => (
  <div className={styles.contentStyles}>
    <Header activeTab={activeTab} />
    {children}
    <Footer />
  </div>
)
 
export default HeaderFooterLayout
