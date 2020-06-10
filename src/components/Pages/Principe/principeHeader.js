import React, { useEffect } from "react";
import styles from "./principe.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrincipeHeader = () => {
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
          {/* <h1>DES TIRAGES ORIGINAUX LIMITÉS À 15 EXEMPLAIRES</h1> */}
          <p>
            Actuellement une cinquantaine d’œuvres sont disponibles en édition
            limitée, sous forme d'originaux tirés à 15 exemplaires, signés et
            numérotés. L’artiste s’engageant à ne pas produire d’autres tirages
            au-delà du nombre d’exemplaires fixé. Toutefois, dans le cadre
            d’expositions dans des galeries ou des musées, l’artiste se réserve
            le droit de proposer d’autres tirages dans un format distinctement
            différent, ceci étant favorable à la notoriété de l’oeuvre.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.leftContent}>
          <h2>LE TIRAGE SEUL</h2>
          <p>
            L’image est tirée avec une marge tournante de 5 cm, vous permettant
            différents types d’encadrement. Elle est signée et numérotée dans la
            marge inférieure. Chaque photographie est délivrée avec un
            certificat d’authenticité signé qui assure à l’acquéreur que
            l’oeuvre est bien celle de l’artiste.
          </p>

          <p>Les tirages vendus contrecollés sont signés et numérotés au dos</p>

          <h2>COMMANDER UNE PHOTO</h2>
          <p>
            Commandez votre photographie par email ou par téléphone en précisant
            sa référence, le format et l’adresse d’expédition. Les photos sont
            souvent proposées en 2 formats mais vous pouvez ajuster un format à
            votre convenance lors de votre commande. Les prix sont indiqués pour
            chaque formats en TTC, livraison offerte pour la France. Règlement
            par chèque, virement ou Paypal.
          </p>
        </div>
        <div className={styles.rightContent}>
          <img
            src="../../images/principe/section1right.png"
            alt="Chute de Pierre"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PrincipeHeader;
