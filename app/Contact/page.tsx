import React from 'react'
import Header from '../Header/page'
import Footer from '../Footer/page'
import Style from "./contact.module.css"

const Contact = () => {
  return (
    <div>
      <Header/>
      <div className={Style.div}>
        <h2 className={Style.h2}>Get in Touch</h2>
        <p className={Style.p}>Email: support@burgerwebsite.com</p>
        <p className={Style.p}>Phone: +123 456 7890</p>
        <p className={Style.p}>Address: 123 Burger St, Food Town</p>
      </div>
      <br />
      <br /><br /> <br /> <br />
      <Footer/>
    </div>
  )
}

export default Contact
