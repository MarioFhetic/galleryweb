import React, { useEffect } from "react";
import styles from "./bio.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BioEnd = () => {
  const animation = useAnimation();
  const [sectionEndRef, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "0px",
  });

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible");
  }, [animation, inView]); // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  return (
    <motion.div
      className={styles.sectionEnd}
      ref={sectionEndRef}
      animate={animation}
      initial="hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <div className={styles.containerImg}>
        <div className={styles.cardImgOther}>
          <img
            src="../../images/bio/sectionend01.jpg"
            alt="Design architectural réalisés par Éric Fayolle"
          />
        </div>
        <div className={styles.cardImg}>
          <img
            src="../../images/bio/sectionend02.jpg"
            alt="Design architectural réalisés par Éric Fayolle"
          />
        </div>
        <div className={styles.cardImg}>
          <img
            src="../../images/bio/sectionend03.jpg"
            alt="Design architectural réalisés par Éric Fayolle"
          />
        </div>
      </div>
      <div className={styles.containerLastImg}>
        <div className={styles.leftContent}>
          <img
            src="../../images/bio/lastleft01.jpg"
            alt="Design architectural réalisés par Éric Fayolle"
          />
          <img
            src="../../images/bio/lastleft02.jpg"
            alt="Design architectural réalisés par Éric Fayolle"
          />
        </div>
        <div className={styles.rightContent}>
          <img
            src="../../images/bio/athletisme.png"
            alt="Design architectural réalisés par Éric Fayolle"
          />
          <img
            src="../../images/bio/sectionfooter01.png"
            alt="Design architectural réalisés par Éric Fayolle"
          />
          <img
            src="../../images/bio/sectionfooter02.png"
            alt="Design architectural réalisés par Éric Fayolle"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BioEnd;
