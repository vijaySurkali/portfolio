import React from "react";
import { getImageUrl } from "../utils";
import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.tittle}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg}
          src={getImageUrl("about/aboutImage.png")}
          alt="me setting on laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutImg} src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>
                FrontEnd Developer
              </h3>
              <p>I am Front End Developer with exprience of bulding web sites </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img  className={styles.aboutImg} src={getImageUrl("about/serverIcon.png")} alt="cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>
                React  Developer
              </h3>
              <p>I am FReact  Developer with exprience of bulding  React Native web sites </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutImg} src={getImageUrl("about/uiIcon.png")} alt="cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>
               UI Designer
              </h3>
              <p>I am Front End Developer with exprience of bulding web sites </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
