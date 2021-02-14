import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"

import TitlePage from '../modules/TitlePage'
import ShopSeparator from '../modules/Shop/ShopSeparator'

import Filter from "../components/Filter"
import ShopItems from "../components/ShopItems"
import ShopWrapper from "../components/ShopWrapper"

const ShopPage = () => (
  <HeaderFooterLayout activeTab="Shop">
    <ShopSeparator />
    <ShopWrapper>
      <Filter />
      <ShopItems />
    </ShopWrapper>
  </HeaderFooterLayout>
)

export default ShopPage
