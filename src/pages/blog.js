import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import HeaderSeparator from '../components/HeaderSeparator'
import BlogsContainer from '../modules/Blog/BlogsContainer'

const BlogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <HeaderSeparator title="Blog"/>
        <BlogsContainer />
    </HeaderFooterLayout>
)

export default BlogPage
