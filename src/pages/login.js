import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import LoginSeparator from '../modules/Login/LoginSeparator'

const LoginPage = () => (
    <HeaderFooterLayout activeTab="Login">
        <TitlePage />
        <LoginSeparator />
    </HeaderFooterLayout>
)

export default LoginPage