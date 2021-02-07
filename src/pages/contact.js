import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import ContactForm from '../modules/ContactForm'
import ContactSeperator from '../modules/ContactSeperator'


const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <TitlePage />
        <ContactSeperator />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage
