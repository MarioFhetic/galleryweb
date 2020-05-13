import React, {useEffect } from "react"
import styles from './bio.css'

import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"


const BioFooter = () => {


    const animation = useAnimation();
    const [sectionHalfEndRef, inView] = useInView({
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
        <motion.div 
        className = {styles.sectionBottom}
        ref = {sectionHalfEndRef}
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
                <p>
                    <strong>Parallèlement à son travail personnel,</strong> Eric Fayolle exerce aussi une activité de design graphique
                    auprès d’institutions culturelles, identité visuelle et communication événementielle, et de cabinets
                    d’architectes, mise en couleur de bâtiments, signalétique, design architectural et de création de
                    timbres pour La Poste
                </p>
                <div className = {styles.containerImg}>
                    <div className = {styles.cardImg}>
                        <img src="../../images/bio/sectionbottom01.jpg" alt="Affiche de pub réalisés par Éric Fayolle"/>
                    </div>
                    <div className = {styles.cardImg}>
                        <img src="../../images/bio/sectionbottom02.jpg" alt="Affiche de pub réalisés par Éric Fayolle"/>
                    </div>
                </div>
            </div>
            <div className = {styles.rightContent}>
                <img src="../../images/bio/sectionbottom03.jpg" alt="Affiche de pub réalisés par Éric Fayolle"/>
            </div>
        </motion.div>
    )
}

export default BioFooter;
