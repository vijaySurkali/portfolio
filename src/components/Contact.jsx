import React from 'react'
import { getImageUrl } from '../utils'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer  className={styles.container} id="Contact">
     <div className={styles.text}>
      <h2 >Contact</h2>
      
      
      <p>Feel Free to reach out.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
      <a href="mailto:vijaysurkali292@gmail.com">myemail@email.com</a>
      </li>
      <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="github Icon" />
      <a href="">github/vijaysurkali</a>
      </li>
      <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
      <a href="https://www.linkedin.com/in/vijay-surkali-1a6659235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin/vijaysurkali</a>
      </li>
      </ul>
    </footer>
    
  )
}

export default Contact;
