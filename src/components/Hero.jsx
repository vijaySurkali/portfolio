import React from 'react'
import { getImageUrl } from '../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.contant}>
      <h1 className={styles.tittle}>Hii I am vijay surkali </h1>
      <p className={styles.discription}>I am from bazpur and currently pursunig Bachelor of computer appliction from Graphic Era Hill University , Bhimtal </p>
      <a href="vijaysurkali292@gmail.com" className={styles.contactBtn}>CONTACT ME</a>

    </div>
    <img src={getImageUrl("hero/vijaysurkali.png")} className = {styles.heroimg} alt="Hero image of me" />
    <div className={styles.topblur}></div>
    <div className={styles.buttomblur}></div>
   </section>
  )
}

export default Hero
