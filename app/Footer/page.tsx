import React from 'react'
import CssStyle  from "./footer.module.css"

const Footer = () => {
  return (
    <div className={CssStyle.footer}>
      <h3 className={CssStyle.h3}>Burger Heaven</h3>
      <p className={CssStyle.p}>Delicious burgers, made fresh every day!</p>
      <p>&copy; 2024 Burger Haven. All rights reserved.</p>
    </div>
  )
}

export default Footer
