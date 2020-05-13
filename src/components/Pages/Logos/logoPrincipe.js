import React, {useEffect } from "react"
import styles from './logoImpression.css';

import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"

const LogoPrincipe = () =>

{

    const animation = useAnimation();
    const [logoPrincipeRef, inView] = useInView({
        triggerOnce: true, // renvoi que une seule fois false puis que des true
        rootMargin: '0px' 

    });

    useEffect(() =>
    {
        // si inView est set to true on run la variant "visible"
        if(inView)
        (
            animation.start('visible')
        )

    }, [animation, inView]) // on met une dépendance comme ça dès que inView est true ça trigger notre useEffect

    return(
        <motion.div 
        className = {styles.logo_impression}
        ref = {logoPrincipeRef}
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
                y: -72,
            }
        
        }}
        >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 260.74 68.69">
                <text transform="translate(66.13 58.94) scale(1.04 1)">
                    PRINCIPE
                </text>
                <rect x="31.24" y="31.4" width="27.5" height="27.5"/>
                <path d="M49.3,118.11A29.36,29.36,0,1,1,78.66,88.75H49.3Z" transform="translate(-19.94 -59.4)"/>
            </svg>
        </motion.div>
    )
}

export default LogoPrincipe;