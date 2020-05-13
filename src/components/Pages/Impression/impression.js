import React from 'react';
import styles from './impression.css'

import LogoImpression from '../Logos/logoImpression';
import Fade from 'react-reveal/Fade';


const Impression = () =>
{
    return(
        <Fade duration = {2500}>

            <div className = {styles.bigContainer}>
                <LogoImpression/>
                <div className ={styles.containerHeader}>
                    <div className = {styles.header}>
                        <p>
                            Le processus photographique est composé de deux moments de création à part entière : la prise de vue et le tirage. 
                            Le regard, l’intention de la prise de vue se réalisent et s’expriment lors du tirage. 
                            Après de longues années de tirages argentiques dans mon laboratoire, 
                            il m’est difficile de confier une impression numérique à d’autres ; ne pas maîtriser le tirage me donnant 
                            l’impression de m’arrêter en chemin.
                        </p>
                    </div>
                </div>
                <div className = {styles.section}>
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
                </div>
                <div className = {styles.sectionBottom}>
                    <p className = {styles.textIntro}>
                        Les photographies d’Eric Fayolle sont éditées sur FineArt paper et papier baryté avec une imprimante équipée des têtes
                        d’impression Micro Piezo et d’encres à base de pigments minéraux encapsulés de résine qui garantissent une qualité optimale 
                        en termes de rendu et de conservation.
                    </p>
                    <div className = {styles.leftContentBottom}>
                        <img src="../../images/impression/section2left.jpg" alt="Photographie d'une femme mettant un papier dans une imprimante"/>
                    </div>
                    <div className = {styles.rightContentBottom}>
                        <h2>LES TIRAGES NUMÉRIQUES PIGMENTAIRES FINE ART</h2>
                        <p>
                            Les tirages sont réalisés sur papier FineArt, sans acide, avec des encres pigmentaires longue conservation,
                            sur une imprimante professionnelle Epson Stylus 11800 64’ (160cm), par un tireur numérique professionnel.
                        </p>
                        <h2>LES PAPIERS FINE ART</h2>
                        <p>
                            LES PAPIERS FINE ART 
                            Hanhemülhe rag 308 gr. mat 
                            Type papier à dessin, ce papier agréable au toucher en coton blanc  chaud, offre un grain feutré et confère aux images un parfait rendu des détails.
                        </p>
                        <p>
                            Hanhemülhe FineArt Baryta satin de 330 gr. 
                            Papier barité ayant un très beau rendu, lumineux, avec une large gamme de gris et des noirs profonds.
                        </p>
                    </div>
                    <p className = {styles.textEnd}>
                        Depuis plusieurs années, de nombreuses recherches sont menées autour de l’impression numérique d’oeuvres ou de photographies d’art - 
                        Résultats publiés par Wilhem Research - Les procédés d’impression, imprimantes, encres et papiers sont testés par des laboratoires et 
                        des artistes afin de garantir aux oeuvres la plus haute qualité possible, proche de la lithographie, une excellente stabilité des couleurs et une plus grande pérennité.
                    </p>
                </div> 
            </div>
        </Fade>

    )
}


export default Impression