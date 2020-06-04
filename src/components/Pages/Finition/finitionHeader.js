import React, { useEffect } from "react";
import styles from "./finition.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Logo
// import LogoFinition from "../../Pages/Logos/logoFinition";

const FinitionHeader = () => {
  const animation = useAnimation();
  const [sectionHeaderFinitionRef, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "0px",
  });

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible");
  }, [animation, inView]); // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  return (
    <motion.div
      className={styles.bigContainer}
      ref={sectionHeaderFinitionRef}
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
      <div className={styles.containerHeader}>
        <div className={styles.header}>
          <h1>
            Plusieurs solutions de finition vous sont proposées avant de
            commander une image.
          </h1>
        </div>
      </div>
      <div className={styles.titleSection}>
        <h2>CONTRE COLLÉ ET CHASSIS ALUMINIUM</h2>
      </div>
      <div className={styles.section}>
        <div className={styles.leftContent}>
          <p>
            La photographie est contrecollée de façon permanente sur une plaque
            rigide de Dibond™ de 3 mm d’épaisseur au format exact de l'image,
            sur laquelle est collé au dos un châssis en aluminium de 2 cm
            d'épaisseur, rentrant de 5 cm.
          </p>
          <div className={styles.containerImg}>
            <img
              src="../../images/finitions/section1left.png"
              alt="Photographie faite en contre collé et chassis alumminium"
            />
          </div>
        </div>
        <div className={styles.rightContent}>
          <img
            src="../../images/finitions/section1right.png"
            alt="Photographie faite en contre collé et chassis alumminium"
          />
        </div>
      </div>
      <div className={styles.infoSection}>
        <p>
          Cette finition garantie une excellente rigidité et permet une accroche
          décollée du mur.
        </p>
      </div>
    </motion.div>
  );
};

export default FinitionHeader;
