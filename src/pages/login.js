import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import LoginSeparator from '../modules/Login/LoginSeparator'
import Login from '../modules/Login/Login'


const LoginPage = () => (
    <HeaderFooterLayout activeTab="Login">
        <TitlePage />
        <LoginSeparator />
        <Login />
    </HeaderFooterLayout>
)

export default LoginPage