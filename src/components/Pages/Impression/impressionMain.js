import React, {useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"
import styles from './impression.css'



const ImpressionMain = () => {



    const animation = useAnimation();
    const [sectionMainRef, inView] = useInView({
        triggerOnce: true, // renvoi que une seule fois false puis que des true
        rootMargin: '-300px' 

    });

    useEffect(() =>
    {
        // si inView est set to true on run la variant "visible"
        if(inView)
        (
            animation.start('visible')
        )

    }, [animation, inView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect


    return (
        <motion.div className = {styles.section}
        ref = {sectionMainRef}
        animate = {animation}
        initial = "hidden" // initial est set à hidden donc il sera caché avec un y de 72 à la base
        variants = {{
            visible: {
                opacity: 1,
                y: 0,
                transition: {duration: 0.6, ease: [0.6,0.05,-0.01,0.9]}
        },
            hidden: {
                opacity: 0,
                y: 72,
            }
        
        }}
        >
            <div className = {styles.leftContent}>
                <h2>ERIC FAYOLLE ET LABEL IMAGE</h2>
                <p>  
                    L'Atelier Label Image est un laboratoire photographique artisanal de tirages numériques. 
                </p>
                <p>
                    J’y ai rencontré des professionnels aiguisés, sensibles à toutes les nuances d’une image, à l’équilibre des contrastes, la qualité des noirs, 
                    leur épaisseur et leur transparence. Je retrouve dans cet atelier la même exigence dans le réglage des impressions numériques que celles que j’imposais à mes tirages argentiques
                </p>
                <p>
                    Mon partenariat avec Label Image me permet donc d’échanger et de faire des choix créatifs jusqu’au tirage définitif de l’image, 
                    comme je le faisais dans la solitude de mon laboratoire mais avec le plaisir de les avoir partagés.
                </p>
            </div>
            <div className = {styles.rightContent}>
                <img src="../../images/impression/section1right.jpg" alt="Photophraphie d'une femme regardant une image imprimée sur papier"/>
            </div>
            <div className = {styles.logoLabelImage}>
                <img src="../../images/impression/logolabelimage.png" alt="Logo Label Image"/>
            </div>
        </motion.div>
    )
}

export default ImpressionMain;
