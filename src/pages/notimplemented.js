import React from 'react'
import {navigate} from 'gatsby'
import styles from './notimplemented.module.css'

const Notimplemented = () => {

  return (
  <main className={styles.background}>
    <section className={styles.container}>

      <h2>PAGE NOT IMPLEMENTED</h2>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>

    </section>
  </main>
)}

export default Notimplemented