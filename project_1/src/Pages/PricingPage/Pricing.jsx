import React from 'react'
import style from "./Pricing.module.css"
const Pricing = () => {
  return (
    <div className={style.bodyContainer}>
      <div>
        <h1 className={style.h1}>Get a exclusive pricing plan</h1>
      </div>
      <div className={style.pricingSheetContainer}>
    <div className={style.mainContainer1}>
      <div className={style.container1_1}>
    <h2>Besic</h2>
    <p className={style.price}>$<span>49</span>/pm</p>
      </div>
      <div className={style.container2}>
    <p>Personal trainer</p>
    <p>Body building</p>
    <p>Yoga</p>
    <p>Cycling</p>
    <p>Weight loss</p>
    <button className={style.btn1}>GET STARTED</button>
      </div>
    </div>
     <div className={style.mainContainer2}>
     <div className={style.container1_2}>
   <h2>Standard</h2>
   <p className={style.price}>$<span>79</span>/pm</p>
     </div>
     <div className={style.container2}>
   <p>Personal trainer</p>
   <p>Body building</p>
   <p>Yoga</p>
   <p>Cycling</p>
   <p>Weight loss</p>
   <button className={style.btn2}>GET STARTED</button>
     </div>
   </div>
    <div className={style.mainContainer3}>
    <div className={style.container1_3}>
  <h2>Enterprice</h2>
  <p className={style.price}>$<span>109</span>/pm</p>
    </div>
    <div className={style.container2}>
  <p>Personal trainer</p>
  <p>Body building</p>
  <p>Yoga</p>
  <p>Cycling</p>
  <p>Weight loss</p>
  <button className={style.btn3}>GET STARTED</button>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Pricing;