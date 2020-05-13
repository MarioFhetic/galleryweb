import React, {useEffect } from "react"
import styles from './bio.css'

import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"


const BioFooter = () => {


    const animation = useAnimation();
    const [sectionFooterRef, inView] = useInView({
        triggerOnce: true, // renvoi que une seule fois false puis que des true
        rootMargin: '-200px' 

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
        <motion.div className = {styles.sectionMain}
        ref = {sectionFooterRef}
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
            <div className = {styles.containerImg}>
                <div className = {styles.cardImg}>
                    <img src="../../images/bio/sectionmain01.jpg" alt="Photographie d'une sculpture en oxydation"/>
                    <div className = {styles.captionImg}>
                        <span>Oxydation 5  135,5x132,5</span>    
                    </div>                        
                </div>
                <div className = {styles.cardImg}>
                    <img src="../../images/bio/sectionmain02.jpg" alt="Photographie d'une sculpture en oxydation"/>
                    <div className = {styles.captionImg}>
                        <span>Oxydation 4  141x100</span>    
                    </div>                        
                </div>
                <div className = {styles.cardImgOther}>
                    <img src="../../images/bio/sectionmain03.jpg" alt="Photographie d'une sculpture en oxydation"/>
                    <div className = {styles.captionImg}>
                        <span>Il Baccio 158x217</span>    
                    </div>                        
                </div>
            </div>
        </motion.div>
    )
}

export default BioFooter;
