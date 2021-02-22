import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import HeaderSeparator from '../components/HeaderSeparator'
import TravelContainer from '../modules/Travel/TravelContainer'

const TravelPage = () => (
    <HeaderFooterLayout activeTab="Travel">
        <HeaderSeparator title="Travel"/>
        <TravelContainer />
    </HeaderFooterLayout>
)

export default TravelPage
