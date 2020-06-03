import React, { useEffect } from "react";
import styles from "./gallerie.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LeftContentImg = () => {
  const animation = useAnimation();
  const [leftcontentimg, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-150px",
  });

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible");
  }, [animation, inView]); // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  return (
    <div className={styles.leftContentImg}>
      <motion.div
        className={styles.overlayLeftContent}
        ref={leftcontentimg}
        animate={animation}
        initial="hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
        variants={{
          visible: {
            height: "0%",
            transition: {
              delay: 1,
              duration: 1.7,
              ease: [0.6, 0.05, -0.01, 0.9],
            },
          },
          hidden: {
            height: "100%",
          },
        }}
      ></motion.div>
    </div>
  );
};

export default LeftContentImg;
