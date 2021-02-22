import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ContactForm from '../modules/Contact/ContactForm'
import HeaderSeparator from '../components/HeaderSeparator'


const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <HeaderSeparator title="Contact"/>
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage
