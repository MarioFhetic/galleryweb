import React, {useEffect } from "react";
import styles from './principe.css';


import { motion, useAnimation } from "framer-motion";
import {useInView} from "react-intersection-observer";


const PrincipeBottom = () => 
{

    const animation = useAnimation();
    const [sectionBottomRef, inView] = useInView({
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
        className = {styles.sectionBottom}
        ref = {sectionBottomRef}
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
                <h2>EXPEDITION</h2>
                <p>  
                    Gratuite en France pour les tirages seuls
                    La photo est enroulée dans une feuille de soie et emballée dans un tube de carton rigide puis expédiée à l’adresse de l’acquéreur ou à celle de son choix. 
                </p>

                <h2>FINITIONS</h2>
                <p>  
                    Plusieurs solutions d’encadrement vous sont proposées avant de commander une image.
                </p>

                <p> 
                    Caisse américaine en bois, finition noire, blanche ou naturelle. 
                    Plexicollage.
                </p>
                <p>
                    Le devis des finitions peut être défini par mail ou téléphone en fonction de votre choix, mais il est également possible de prendre rendez-vous pour une visite afin de constater la qualité des encadrements et des tirages sur les photographies disponibles à la galerie.
                    La photographie commandée peut être mise à la disposition de l’acquéreur à l’atelier 154 rue Oberkampf 75011 Paris.
                </p>

            </div>
            <div className = {styles.rightContent}>
                <img src="../../images/principe/section2right.jpg" alt="Photographie d'un tableau en noir et blanc affiché au mur"/>
            </div>
            <div className = {styles.textEnd}>
                <h2>COPYRIGHTS</h2>
                <p>
                    Comme toute création originale, une photographie originale porte l'empreinte de la personnalité de son auteur. Elle devient dès lors protégée par les articles L111-1 et suivants du Code français de la Propriété Intellectuelle comme œuvre de l'esprit bénéficiant du droit d'auteur. Les droits de l'acquéreur sur l'œuvre sont donc limités à un droit d'usage privé, excluant tout droit de représentation et de reproduction.
                    © Tous droits réservés. Aucune image ne peut être utilisée sauf accord contractuel avec Eric Fayolle. Toute diffusion, publication et reproduction, numérique ou analogique, du contenu ou d´une partie du contenu du site Internet Photo Galerie Web Eric Fayolle doit être approuvée expressément par écrit par Eric Fayolle.
                </p>
            
            </div>
        </motion.div>
    )
}

export default PrincipeBottom;
