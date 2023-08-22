import styles from './styles.module.css'
import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';

const About=()=>{
    const [currentStringIndex, setCurrentStringIndex] = useState(0);

    useEffect(() => {
        const strings = ["","Software Engineering", "Freelancer", "Web Designer", "Web Developer"];
        const options = {
          strings: strings,
          typeSpeed: 100,
          backSpeed: 40,
          loop: true,
          onComplete: (self) => {
            setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
          },
        };
    
        const typing = new Typed('.text', options);
    
        return () => {
          typing.destroy();
        };
      }, []);
    
    return <div className={styles.container}>
        <div className={styles.box}>
        <div className={styles.iam}>I'm</div>
        <div className={`text ${styles.text}`} ></div>
      </div>
    </div>
}
export default About