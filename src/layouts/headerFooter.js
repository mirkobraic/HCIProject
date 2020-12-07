import React from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'
 
const HeaderFooterLayout = ({children, activeTab}) => (
  <>
    <Header activeTab={activeTab} />
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout
