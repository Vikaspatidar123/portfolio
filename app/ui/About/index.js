import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import Typed from "typed.js";

const About = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);

  useEffect(() => {
    const strings = [
      "",
      "Software Engineer",
      "Freelancer",
      "Web Designer",
      "Web Developer",
    ];
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      onComplete: (self) => {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
      },
    };

    const typing = new Typed(".text", options);

    return () => {
      typing.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.iam}>I'm</div>
        <div className={`text ${styles.text}`}></div>
      </div>
      <div className={styles.about}>
        <div>
          <div className={styles.head}>About Me:</div>
          <div className={styles.about_text}>
            I am a results-driven software engineer with a strong foundation in
            computer science and a keen eye for detail. My journey began with a
            fascination for how software powers our modern world, leading me to
            pursue a degree in Computer Science. Over the years, I have honed my
            skills through hands-on experience, continuous learning, and a drive
            to tackle complex challenges.
          </div>
        </div>

        <div className={styles.dec_box}>
          <div className={styles.head}>Technical Proficiencies:</div>
          <div className={styles.about_text}>
            <div>* Programming Languages: Proficient in Python, C++, and JavaScript.</div>
            <div>* Web Technologies: Experienced in front-end (HTML, CSS, React) and back-end (Node.js, Express) development.</div>
            <div>* Databases: Skilled in working with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.</div>
            <div>* Version Control: Proficient with Git and GitHub for collaborative development.</div>
            <div>* Software Development: Strong understanding of software development methodologies, including Agile and Scrum.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
