import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import HeaderSeparator from '../components/HeaderSeparator'

import Filter from "../components/Filter"
import ShopItems from "../components/ShopItems"
import ShopWrapper from "../components/ShopWrapper"

const ShopPage = () => (
  <HeaderFooterLayout activeTab="Shop">
    <HeaderSeparator title="Shop"/>
    <ShopWrapper>
      <Filter />
      <ShopItems />
    </ShopWrapper>
  </HeaderFooterLayout>
)

export default ShopPage
