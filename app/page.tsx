import Footer from "./Footer/page";
import Header from "./Header/page";
import cssStyle from './page.module.css'
export default function Home(){
  return(
    <div className={cssStyle.div}>
      <Header/>
      <div className={cssStyle.div2}>
      <div className={cssStyle.div3}>
        <h1 className={cssStyle.h1}>"Bite into the Extraordinary!"</h1>
        <p className={cssStyle.p}>"Why settle for just any burger when you can have one that’s extraordinary?we don’t just make burgers – we create edible masterpieces with flavors that take your taste buds on a thrill ride. From juicy patties to unexpected toppings, every bite is designed to surprise and delight. Get ready to taste the best burger adventure in town!"

</p>
        <button className={cssStyle.button}>Explore Our Menu</button>
      </div>
      <div className={cssStyle.div4}>
        <img src="/Images/front.gif" alt="home" 
        className={cssStyle.img}/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}