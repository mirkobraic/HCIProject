import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import ContactForm from '../modules/ContactForm'


const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <TitlePage />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage
