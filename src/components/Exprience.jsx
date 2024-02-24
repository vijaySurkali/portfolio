import React from "react";
import skills from "../data/skils.json";
import { getImageUrl } from "../utils";
import history from "../data/history.json";
import styles from "./Exprience.module.css"

const Exprience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.containt}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation}Logo`}
                />
                <div className={styles.historyItemDetials}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} , ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experiences, id) => {
                      return <li key={id}>{experiences}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}{" "}
        </ul>
      </div>
    </section>
  );
};

export default Exprience;
