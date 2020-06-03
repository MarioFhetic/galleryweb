import React, { useEffect } from "react";
import styles from "./gallerie.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SecondBigImg = () => {
  const animation = useAnimation();
  const [secondbigimg, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-150px",
  });

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible");
  }, [animation, inView]); // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  return (
    <div className={styles.containerFirstImg}>
      <div className={styles.secondImg}>
        <motion.div
          className={styles.overlayFirstImg}
          ref={secondbigimg}
          animate={animation}
          initial="hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
          variants={{
            visible: {
              height: "0%",
              transition: {
                duration: 1.3,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            },
            hidden: {
              height: "100%",
            },
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SecondBigImg;
