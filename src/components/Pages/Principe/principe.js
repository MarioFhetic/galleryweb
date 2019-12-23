import React from 'react';
import styles from './principe.css'

import LogoPrincipe from '../Logos/logoPrincipe';

const Principe = () =>
    (
        <div className = {styles.bigContainer}>
            <LogoPrincipe/>
            <div className ={styles.containerHeader}>
                <div className = {styles.header}>
                    <h1>DES TIRAGES ORIGINAUX LIMITÉS À 15 EXEMPLAIRES</h1>
                    <p>
                    Actuellement une cinquantaine d’œuvres sont disponibles en édition limitée, sous forme d'originaux tirés à 15 exemplaires, signés et numérotés. L’artiste s’engageant à ne pas produire d’autres tirages au-delà du nombre d’exemplaires fixé. Toutefois, dans le cadre d’expositions dans des galeries ou des musées, l’artiste se réserve le droit de proposer d’autres tirages dans un format distinctement différent, ceci étant favorable à la notoriété de l’oeuvre.
                    </p>
                </div>
            </div>
            <div className = {styles.section}>
                <div className = {styles.leftContent}>
                    <h2>LE TIRAGE SEUL</h2>
                    <p>  
                        L’image est tirée avec une marge tournante de 5 cm, vous permettant différents types d’encadrement. Elle est signée et numérotée dans la marge inférieure. 
                        Chaque photographie est délivrée avec un certificat d’authenticité signé qui assure à l’acquéreur que l’oeuvre est bien celle de l’artiste.
                    </p>

                    <p>Les tirages vendus contrecollés sont signés et numérotés au dos</p>

                    <h2>COMMANDER UNE PHOTO</h2>
                    <p>  
                        Commandez votre photographie par email ou par téléphone 
                        en précisant sa référence, le format et l’adresse d’expédition. 
                        Les photos sont souvent proposées en 2 formats mais vous pouvez ajuster un format à votre convenance lors de votre commande. 
                        Les prix sont indiqués pour chaque formats en TTC, livraison offerte pour la France. 
                        Règlement par chèque, virement ou Paypal.
                    </p>
                </div>
                <div className = {styles.rightContent}>
                    <img src="../../images/principe/section1right.png" alt=""/>
                </div>
            </div>
            <div className = {styles.sectionBottom}>
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
                        Plusieurs solutions d’encadrement vous sont proposées avant de commander une image.
                        Contre collé sur aluminium ou Dibond au format de l’image.
                        Caisse américaine en bois, finition noire, blanche ou naturelle. 
                        Plexicollage.
                    </p>
                    <p>
                        Le devis des finitions peut être défini par mail ou téléphone en fonction de votre choix, mais il est également possible de prendre rendez-vous pour une visite afin de constater la qualité des encadrements et des tirages sur les photographies disponibles à la galerie.
                        La photographie commandée peut être mise à la disposition de l’acquéreur à l’atelier 154 rue Oberkampf 75011 Paris.
                    </p>

                </div>
                <div className = {styles.rightContent}>
                    <img src="../../images/principe/section2right.jpg" alt=""/>
                </div>
                <div className = {styles.textEnd}>
                    <h2>COPYRIGHTS</h2>
                    <p>
                        Comme toute création originale, une photographie originale porte l'empreinte de la personnalité de son auteur. Elle devient dès lors protégée par les articles L111-1 et suivants du Code français de la Propriété Intellectuelle comme œuvre de l'esprit bénéficiant du droit d'auteur. Les droits de l'acquéreur sur l'œuvre sont donc limités à un droit d'usage privé, excluant tout droit de représentation et de reproduction.
                        © Tous droits réservés. Aucune image ne peut être utilisée sauf accord contractuel avec Eric Fayolle. Toute diffusion, publication et reproduction, numérique ou analogique, du contenu ou d´une partie du contenu du site Internet Photo Galerie Web Eric Fayolle doit être approuvée expressément par écrit par Eric Fayolle.
                    </p>
                   
                </div>
            </div>
        </div>
    )

export default Principe