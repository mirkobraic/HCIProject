import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import TravelSeparator from '../modules/Travel/TravelSeparator'
import TravelContainer from '../modules/Travel/TravelContainer'

const TravelPage = () => (
    <HeaderFooterLayout activeTab="Travel">
        <TravelSeparator />
        <TravelContainer />
    </HeaderFooterLayout>
)

export default TravelPage
