import React from 'react'
import Style from './menu.module.css' 
import Header from '../Header/page'
import Image from 'next/image'
import Footer from '../Footer/page'

const Menu = () => {
  return (
    <div>
      <Header/>
      <div className={Style.div}>
      <h1 className={Style.h1}>"Delicious Bites Await"</h1>
      <p className={Style.p}>Each burger is a masterpiece, combining fresh ingredients with bold flavors you'll love. <br />Explore our range of burgers and enjoy a burst of flavor in every bite.</p>
    </div>
    <div className={Style.itemstyle}>
      <div className={Style.burgeroverlay}>
        <Image src="/Images/pic1.jpg" alt="pic1" width={200} height={150} objectFit='cover' style={{borderRadius:"10px"}}/>
        <h2 className={Style.h2}>Zinger Burger</h2>
        <p>350rs</p>
        </div>
        <div className={Style.burgeroverlay}>
        <Image src="/Images/pic2.jpg" alt="pic2" width={200} height={150}  objectFit="cover" style={{borderRadius:"10px"}}/>
        <h2 className={Style.h2}>Chicken Burger</h2>
        <p>250rs</p>
        </div>
        <div className={Style.burgeroverlay}>
        <Image src="/Images/pic3.jpg" alt="pic3" width={200} height={150} objectFit='cover' style={{borderRadius:"10px"}}/> 
        <h2 className={Style.h2}> Beef Burger</h2>
        <p> 380rs</p>
        </div>
        <div className={Style.burgeroverlay}>
        <Image src="/Images/pic4.jpg" alt="pic4" width={200} height={200} objectFit='cover' style={{borderRadius:"10px"}}/>
        <h2 className={Style.h2}>Cheese Burger</h2>
        <p>200rs</p>
        </div>
        <div className={Style.burgeroverlay}>
        <Image src="/Images/pic5.jpg" alt="pic5" width={200} height={150} objectFit='cover' style={{borderRadius:"10px"}}/>
        <h2 className={Style.h2}>Chicken crunch Burger</h2>
        <p>350rs</p>
        </div>
        <div className={Style.burgeroverlay}>
        <Image src="/Images/pic6.jpg" alt="pic6" width={200} height={150} objectFit='cover' style={{borderRadius:"10px"}}/>
        <h2 className={Style.h2}>Double Degger Burger</h2>
        <p>400rs</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Menu
