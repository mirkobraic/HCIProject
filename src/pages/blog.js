import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import BlogSeparator from '../modules/Blog/BlogSeparator'

const BlogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <TitlePage />
        <BlogSeparator />
    </HeaderFooterLayout>
)

export default BlogPage
