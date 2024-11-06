import Link from "next/link"
import CssStyle from "./header.module.css"
const Header = () => {
  return (
    <div className={CssStyle.header}>
      <h1 className={CssStyle.h1} >Burger </h1>
      <div className={CssStyle.nav}>
      <Link href="/">Home</Link>
      <Link href="/Menu">Menu</Link>
      <Link href="/Contact">Contact</Link>
      </div>
      <button className={CssStyle.button}>Cart</button>
    </div>
  )
}

export default Header
