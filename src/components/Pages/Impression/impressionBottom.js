import React, { useEffect } from "react";
import styles from "./impression.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImpressionBottom = () => {
  const animation = useAnimation();
  const [sectionBottomRef, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-180px",
  });

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible");
  }, [animation, inView]); // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  return (
    <motion.div
      className={styles.sectionBottom}
      ref={sectionBottomRef}
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
      <p className={styles.textIntro}>
        Les photographies d’Eric Fayolle sont éditées sur FineArt paper et
        papier baryté avec une imprimante équipée des têtes d’impression Micro
        Piezo et d’encres à base de pigments minéraux encapsulés de résine qui
        garantissent une qualité optimale en termes de rendu et de conservation.
      </p>
      <div className={styles.leftContentBottom}>
        <img
          src="../../images/impression/section2left.jpg"
          alt="Photophraphie d'Olivia Gay qui imprime du papier"
        />
        <span className={styles.captionImgOther}>© Olivia Gay</span>
      </div>
      <div className={styles.rightContentBottom}>
        <h2>LES TIRAGES NUMÉRIQUES PIGMENTAIRES FINE ART</h2>
        <p>
          Les tirages sont réalisés sur papier FineArt, sans acide, avec des
          encres pigmentaires longue conservation, sur une imprimante
          professionnelle Epson Stylus 11800 64’ (160cm), par un tireur
          numérique professionnel.
        </p>
        <h2>LES PAPIERS FINE ART</h2>
        <p>
          LES PAPIERS FINE ART Hanhemülhe rag 308 gr. mat Type papier à dessin,
          ce papier agréable au toucher en coton blanc chaud, offre un grain
          feutré et confère aux images un parfait rendu des détails.
        </p>
        <p>
          Hanhemülhe FineArt Baryta satin de 330 gr. Papier barité ayant un très
          beau rendu, lumineux, avec une large gamme de gris et des noirs
          profonds.
        </p>
      </div>
      <p className={styles.textEnd}>
        Depuis plusieurs années, de nombreuses recherches sont menées autour de
        l’impression numérique d’oeuvres ou de photographies d’art - Résultats
        publiés par Wilhem Research - Les procédés d’impression, imprimantes,
        encres et papiers sont testés par des laboratoires et des artistes afin
        de garantir aux oeuvres la plus haute qualité possible, proche de la
        lithographie, une excellente stabilité des couleurs et une plus grande
        pérennité.
      </p>
    </motion.div>
  );
};

export default ImpressionBottom;
