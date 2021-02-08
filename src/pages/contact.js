import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from '../modules/TitlePage'
import ContactForm from '../modules/Contact/ContactForm'
import ContactSeperator from '../modules/Contact/ContactSeperator'


const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <TitlePage />
        <ContactSeperator />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage
