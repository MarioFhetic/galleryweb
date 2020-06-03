import React, { useEffect } from "react";
import styles from "./bio.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BioHeader = () => {
  const animation = useAnimation();
  const [sectionTopRef, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-180px",
  });

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible");
  }, [animation, inView]); // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  return (
    <motion.div
      className={styles.section}
      ref={sectionTopRef}
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
      <div className={styles.expositionCollective}>
        <h1>PRINCIPALES EXPOSITIONS COLLECTIVES</h1>
        <ul>
          <span>Musée d'Art moderne, Fribourg - Suisse</span>
          <span>Centre culturel Jacques Prévert - Villeparisis</span>
          <span>Palais des congrès - Royan</span>
          <span>Moins trente, Centre National de la Photographie - Paris</span>
          <span>Galerie Agora - Evry</span>
          <span>Forum des Arts - Fréjus</span>
          <span>
            15 ème rencontres Internationales de la photographie - Arles
          </span>
          <span>Art Jonction International, Galerie Lola Gassin - Nice</span>
          <span>
            Muranushi-Lederman Gallery - New York I Galerie Artfloor, In situ -
            Paris
          </span>
          <span>Café de jour, Galerie ArtstudioK - Paris</span>
        </ul>
      </div>
      <div className={styles.collectionPublique}>
        <h1>COLLECTIONS PUBLIQUES</h1>
        <ul>
          <span>Bibliothèque Nationale de France</span>
          <span>Centre G. Pompidou</span>
          <span>Fonds National d'Art Contemporain</span>
          <span>Musée de Clamecy</span>
          <span>Musée de la Rochelle</span>
          <span>Galerie de prêts Agora d'Evry</span>
          <span>Galerie 666 Paris </span>
        </ul>
      </div>
    </motion.div>
  );
};

export default BioHeader;
