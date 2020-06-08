import React, { useEffect } from "react";
import styles from "./bio.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BioHeader = () => {
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
          <div className={styles.containerHeaderTitle}>
            <h1> " Faire l’expérience de la beauté d’un objet, </h1>
            <h1 className={styles.secondQuote}>
              cela signifie que l’expérience est nécessairement faussée "
            </h1>
          </div>

          <span className={styles.refCitation}>Nietzsche</span>

          <p>
            Si une photographie donne une image de la réalité, elle doit être
            capable de saisir ce que les gens regardent mais ne voient plus. Le
            réel n’est pas seulement dans ce qui est perçu, mais dans la manière
            de voir et de faire. L’ordinaire, le dérisoire, les éléments épars
            de la banalité quotidienne, sont ceux qui méritent d’être
            privilégiés, parce qu’on avait fini par ne plus savoir les voir. La
            photographie est l’expression de notre façon d’éprouver l’existence,
            et d'évoquer au-delà des apparences du visible le monde vivant qui
            nous entoure.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.price}>
          <h1>Prix</h1>
          <ul>
            <span>
              <li>1981</li>Lauréat de la triennale Internationale de la
              photographie, Fribourg - Suisse
            </span>
            <span>
              <li>1982</li>1er Prix du salon international de la recherche
              photographique de Royan
            </span>
            <span>
              <li>1984</li>Boursier de la Villa Médicis hors les murs - Rome
            </span>
          </ul>
        </div>
        <div className={styles.expositionPerso}>
          <h1>PRINCIPALES EXPOSITIONS PERSONNELLES</h1>
          <ul>
            <span>
              <li>Fotographie</li>Galerie Créatis - Paris
            </span>
            <span>
              <li>Emballages</li>Centre National d'expositions - Quebec
            </span>
            <span>
              <li>Photos de rien</li>Galerie 666 - Paris
            </span>
            <span>
              <li>Wrapping</li>The Photographer's Gallery - Londres
            </span>
            <span>
              <li>Instances</li>C.A.C. de Mulhouse, Galerie Agora - Evry
            </span>
            <span>
              <li>Le jeu des restes et du hasard</li>Galerie Lola Gassin - Nice
            </span>
            <span>
              <li>Oxyd</li>Peintures Galerie 154 - Paris
            </span>
            <span>
              <li>Aperçu</li>Photographies Galerie 154 - Paris
            </span>
            <span>
              <li>Vestiges et autres objets</li>Musée de la Halle Saint-pierre -
              Paris
            </span>
            <span>
              <li>Peintures et Photographie</li>Les AAB Belleville - Paris
            </span>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default BioHeader;
