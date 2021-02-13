import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import TravelSeparator from '../modules/Travel/TravelSeparator'

const TravelPage = () => (
    <HeaderFooterLayout activeTab="Travel">
        <TravelSeparator />
    </HeaderFooterLayout>
)

export default TravelPage
