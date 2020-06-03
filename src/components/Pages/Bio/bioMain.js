import React, { useEffect } from "react";
import styles from "./bio.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BioMain = () => {
  const animation = useAnimation();
  const [sectionMainRef, inView] = useInView({
    triggerOnce: true, // renvoi que une seule fois false puis que des true
    rootMargin: "-180px",
  });

  useEffect(() => {
    // si inView est set to true on run la variant "visible"
    if (inView) animation.start("visible");
  }, [animation, inView]); // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

  return (
    <motion.div
      className={styles.sectionHeader}
      ref={sectionMainRef}
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
      <div className={styles.leftContent}>
        <p>
          {" "}
          <strong>Les recherches plastiques</strong> d’Eric Fayolle commencent
          véritablement avec des photos peintes, où il fait coexister dans un
          univers clos, couleurs et noir et blanc, Photos de rien, Emballages,
          Lambeaux de lieux, il intervient sur ses propres tirages noir et blanc
          pour révéler des éléments oubliés par le regard et interroger la
          réalité de la représentation photographique. Cette première phase,
          tournée vers des objets du quotidien, des matériaux usés et patinés
          par le temps, s’achève avec l’obtention d’une bourse de la Villa
          Médicis qui lui permet d’amorcer une série de voyages en Italie.
          <br />
          <br />
          La deuxième phase de son travail photographique est constituée
          d’images réalisées en extérieur. Son regard reste attiré par
          l’esthétique du banal et de l’abandon, mais il découvre désormais ses
          sujets au cours de déambulations dans les villes où il réside. Ses
          photographies, Instances, Foro Italico révèlent les tableaux d’ombres
          et de matières que portent les murs, ainsi que l’empreinte d’un passé
          que le regard néglige.
        </p>
        <br />
        <br />
        <br />
        <p>
          <strong>Dans la poursuite de ses recherches</strong> sur les jeux du
          regard, la matière et le passage du temps, Eric Fayolle développe
          ensuite une technique de peinture par oxydation sur métal. Ces œuvres
          mettent en évidence la nature des recherches plastiques qui
          sous-tendent l’ensemble de ses travaux.
        </p>
      </div>
      <div className={styles.rightContent}>
        <div>
          <img
            src="../../images/bio/section1carton.jpg"
            alt="Photographie d'un carton en noir et blanc"
          />
          <span className={styles.captionImgOther}>Photos de rien</span>
        </div>
        <div>
          <img
            src="../../images/bio/section1book.jpg"
            alt="Photographie d'un livre en noir et blanc"
          />
          <span className={styles.captionImg}>Emballages</span>
        </div>
        <div className={styles.lastChild}>
          <img
            src="../../images/bio/section1voiture.jpg"
            alt="Photographie d'une voiture en noir et blanc"
          />
          <span className={styles.captionImg}>Instances</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BioMain;
