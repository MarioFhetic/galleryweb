import React, { useEffect } from "react";
import styles from "./impression.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImpressionHeader = () => {
  const animation = useAnimation();
  const [sectionHeaderRef, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "0px",
  });

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible");
  }, [animation, inView]); // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  return (
    <motion.div
      ref={sectionHeaderRef}
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
          <p>
            Le processus photographique est composé de deux moments de création
            à part entière : la prise de vue et le tirage. Le regard,
            l’intention de la prise de vue se réalisent et s’expriment lors du
            tirage. Après de longues années de tirages argentiques dans mon
            laboratoire, il m’est difficile de confier une impression numérique
            à d’autres ; ne pas maîtriser le tirage me donnant l’impression de
            m’arrêter en chemin.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpressionHeader;
