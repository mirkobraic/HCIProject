import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import BlogSeparator from '../modules/Blog/BlogSeparator'
import BlogsContainer from '../modules/Blog/BlogsContainer'

const BlogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <TitlePage />
        <BlogSeparator />
        <BlogsContainer />
    </HeaderFooterLayout>
)

export default BlogPage
