import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import ShopSeparator from '../modules/Shop/ShopSeparator'

const ShopPage = () => (
    <HeaderFooterLayout activeTab="Shop">
        <ShopSeparator />
    </HeaderFooterLayout>
)

export default ShopPage
