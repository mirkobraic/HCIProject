import React from 'react'

import styles from './style.module.css';
 
const ContactForm = () => (
    <main className={styles.contactForm}>
        
        <section className={styles.form}>
            <h2 className={styles.title}>Send us a message</h2>
            <form>
                <div>
                    <label htmlFor="name"/>
                    <input name="name" type="text" placeholder="Your name.."/>
                </div>
                <div>
                    <label htmlFor="country" />
                    <input name="country" type="text" placeholder="Country.."/>
                </div>
                <div>
                    <label htmlFor="email"/>
                    <input name="email" type="email" placeholder="Email.."/>
                </div>
                <div>
                    <label htmlFor="phone"/>
                    <input name="phone" type="tel" placeholder="Phone number.."/>
                </div>
                <div className={styles.message}>
                    <label htmlFor="message"/>
                    <textarea name="message" type="text" placeholder="Message.."/>
                </div>
                <button onClick={() => alert('Your message is sent!')}>Submit</button>
            </form>
        </section>
    </main>
)

export default ContactForm