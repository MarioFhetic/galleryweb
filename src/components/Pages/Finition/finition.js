import React from 'react';
import styles from './finition.css'

import LogoFinition from '../Logos/logoFinition';

const Finition = () =>
    (
        <div className = {styles.bigContainer}>
            <LogoFinition/>
            <div className ={styles.containerHeader}>
                <div className = {styles.header}>
                    <h1>Plusieurs solutions de finition vous sont proposées avant de commander une image.</h1>
                </div>
            </div>
            <div className = {styles.section}>
                <div className = {styles.leftContent}>
                    <h2>CONTRE COLLÉ ET CHASSIS ALUMINIUM</h2>
                    <p>  
                        La photographie est contrecollée de façon permanente sur une plaque rigide de Dibond™ de 3 mm d’épaisseur
                        au format exact de l'image, sur laquelle est collé au dos un châssis en aluminium de 2 cm d'épaisseur, rentrant de 5 cm.
                    </p>
                    <div className = {styles.containerImg}>
                        <img src="../../images/finitions/section1left.jpg" alt=""/>
                    </div>
                    <p>Cette finition garantie une excellente rigidité et permet une accroche décollée du mur.</p>
                </div>
                <div className = {styles.rightContent}>
                    <img src="../../images/finitions/section1right.png" alt=""/>
                </div>
            </div>
            <div className = {styles.sectionAmericaine}>
                <div className = {styles.leftContent}>
                    <h2>CAISSE AMÉRICAINE</h2>
                    <p>  
                        Le tirage est contrecollé sur une plaque rigide de Dibond™ de 2 mm d'épaisseur au format exact de l'image. 
                        L’ensemble est intégré dans un cadre en bois naturel, noir ou blanc. Largeur de la bordure du cadre, 9 mm, profondeur 35 mm.
                    </p>
                    <div className = {styles.containerImg}>
                        <img src="../../images/finitions/section2left.jpg" alt=""/>
                    </div>
                    <p>Un cadre sans verre, sobre et élégant qui met en valeur le grain du papier sans aucun reflet.</p>
                </div>
                <div className = {styles.rightContent}>
                    <img src="../../images/finitions/section2right.png" alt=""/>
                </div>
            </div>
            <div className = {styles.sectionPlexicollage}>
                <div className = {styles.leftContent}>
                    <h2>PLEXICOLLAGE </h2>
                    <p>  
                        Le tirage est contre collé sur une plaque d'aluminium de 1 mm. Une plaque de 3 mm d'épaisseur de verre acrylique transparent est posée sur la face image de l'original.
                        L'adhérence est réalisée sans colle par la réaction chimique entre deux composants liquides. Le système est totalement dépourvu de poussière, de bulles d'air et de traces de colle.
                        Une netteté d'image inégalée, le contraste des couleurs est accentué et l'image acquiert une nouvelle profondeur sur toute la surface et la protège à 99,7% contre les rayons UV.
                    </p>
                    <div className = {styles.testContainer}>
                        <div className = {styles.containerImg}>
                            <img src="../../images/finitions/section3left.png" alt=""/>
                        </div>
                        <div className = {styles.captionImg}>
                            <p>
                                Au dos, un chassis alu de 2 cm d'épaisseur, rentrant par rapport au format du tirage, offre une excellente rigidité et une accroche décollée du mur.
                            </p>
                        </div>
                    </div>
                    <p>Cette finition garantie une excellente rigidité et permet une accroche décollée du mur.</p>
                </div>
                <div className = {styles.rightContent}>
                    <img src="../../images/finitions/section3right.png" alt=""/>
                </div>
            </div>
            <div className = {styles.bigImg}>
                <img src="../../images/finitions/bigImg.jpg" alt=""/>
            </div>

        </div>
    )

export default Finition