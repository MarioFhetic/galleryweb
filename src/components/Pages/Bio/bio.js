import React from 'react';
import styles from './bio.css'

import LogoBio from '../Logos/logoBio';

const Bio = () =>
    (
        <div className = {styles.bigContainer}>
            <LogoBio/>
            <div className ={styles.containerHeader}>
                <div className = {styles.header}>
                    <h1> Faire l’expérience de la beauté d’un objet, </h1>
                    <h1 className = {styles.secondQuote}>cela signifie que l’expérience est nécessairement faussée "</h1>
                    <p>
                        Si une photographie donne une image de la réalité, elle doit être capable de saisir ce que les gens regardent
                        mais ne voient plus.<br></br> Le réel n’est pas seulement dans ce qui est perçu, mais dans la manière de voir et de faire.
                        <br></br>
                        L’ordinaire, le dérisoire, les éléments épars de la banalité quotidienne, sont ceux qui méritent d’être privilégiés, 
                        parce qu’on avait fini par ne plus savoir les voir. La photographie est l’expression de notre façon d’éprouver l’existence, 
                        et d'évoquer au-delà des apparences du visible le monde vivant qui nous entoure.
                    </p>
                </div>
            </div>
            <div className = {styles.section}>
                <div className = {styles.price}>
                    <h1>Prix</h1>
                    <ul>
                        <span><li>1981</li>Lauréat de la triennale Internationale de la photographie, Fribourg - Suisse</span>
                        <span><li>1982</li>1er Prix du salon international de la recherche photographique de Royan</span>
                        <span><li>1984</li>Boursier de la Villa Médicis hors les murs - Rome</span>
                    </ul>
                </div>
                <div className = {styles.expositionPerso}>
                    <h1>PRINCIPALES EXPOSITIONS PERSONNELLES</h1>
                    <ul>
                        <span><li>Fotographie</li>Galerie Créatis - Paris</span>
                        <span><li>Emballages</li>Centre National d'expositions - Quebec</span>
                        <span><li>Photos de rien</li>Galerie 666 - Paris</span>
                        <span><li>Wrapping</li>The Photographer's Gallery - Londres</span>
                        <span><li>Instances</li>C.A.C. de Mulhouse, Galerie Agora - Evry</span>
                        <span><li>Le jeu des restes et du hasard</li>Galerie Lola Gassin - Nice</span>
                        <span><li>Oxyd</li>Peintures Galerie 154 - Paris</span>
                        <span><li>Aperçu</li>Photographies Galerie 154 - Paris</span>
                        <span><li>Vestiges et autres objets</li>Musée de la Halle Saint-pierre - Paris</span>
                        <span><li>Peintures et Photographie</li>Les AAB Belleville - Paris</span>
                    </ul>
                </div>
                <div className = {styles.expositionCollective}>
                    <h1>PRINCIPALES EXPOSITIONS COLLECTIVES</h1>
                    <ul>
                        <span>Musée d'Art moderne, Fribourg - Suisse</span>
                        <span>Centre culturel Jacques Prévert - Villeparisis</span>
                        <span>Palais des congrès - Royan</span>
                        <span>Moins trente, Centre National de la Photographie - Paris</span>
                        <span>Galerie Agora - Evry</span>
                        <span>Forum des Arts - Fréjus</span>
                        <span>15 ème rencontres Internationales de la photographie - Arles</span>
                        <span>Art Jonction International, Galerie Lola Gassin - Nice</span>
                        <span>Muranushi-Lederman Gallery - New York  I  Galerie Artfloor, In situ - Paris</span>
                        <span>Café de jour, Galerie ArtstudioK - Paris</span>
                    </ul>
                </div>
                <div className = {styles.collectionPublique}>
                    <h1>COLLECTIONS PUBLIQUES</h1>
                    <ul>
                        <span>Bibliothèque Nationale de France</span>
                        <span>Centre G. Pompidou</span>
                        <span>Fonds National d'Art Contemporain</span>
                        <span>Musée de Clamecy</span>
                        <span>Musée de la Rochelle</span>
                        <span>Galerie de prêts Agora d'Evry</span>
                        <span>Galerie 666 Paris  </span>
                    </ul>
                </div> 
            </div>
            <div className = {styles.sectionHeader}>
                <div className = {styles.leftContent}>
                    <p> <strong>Les recherches plastiques</strong> d’Eric Fayolle commencent véritablement avec des photos peintes, où il fait coexister dans un univers clos, couleurs et noir et blanc, Photos de rien, Emballages, Lambeaux de lieux, il intervient sur ses propres tirages noir et blanc
                        pour révéler des éléments oubliés par le regard et interroger la réalité de la représentation photographique. Cette première phase, tournée vers des objets du quotidien, des matériaux usés et patinés par le temps, s’achève avec l’obtention d’une bourse de la Villa Médicis qui lui permet d’amorcer une série de voyages en Italie.<br></br> 
                        La deuxième phase de son travail photographique est constituée d’images réalisées en extérieur. Son regard reste attiré par  l’esthétique du banal et de l’abandon, mais il découvre désormais ses sujets au cours de déambulations dans les villes où il réside.
                        Ses photographies, Instances, Foro Italico révèlent les tableaux d’ombres et de matières que portent les murs, ainsi que l’empreinte d’un passé que le regard néglige.
                    </p>
                    <p>
                        <strong>Dans la poursuite de ses recherches</strong> sur les jeux du regard, la matière et le passage du temps, Eric Fayolle développe 
                        ensuite une technique de peinture par oxydation sur métal. Ces œuvres mettent en évidence la nature des recherches plastiques 
                        qui sous-tendent l’ensemble de ses travaux.
                    </p>
                </div>
                <div className = {styles.rightContent}>
                    
                </div>
            </div>
            <div className = {styles.sectionMain}>
                <div className = {styles.containerImg}>
                    <div className = {styles.cardImg}>
                        <img src="../../images/bio/sectionmain01.jpg" alt=""/>
                        <div className = {styles.captionImg}>
                            <span>Oxydation 5  135,5x132,5</span>    
                        </div>                        
                    </div>
                    <div className = {styles.cardImg}>
                        <img src="../../images/bio/sectionmain02.jpg" alt=""/>
                        <div className = {styles.captionImg}>
                            <span>Oxydation 4  141x100</span>    
                        </div>                        
                    </div>
                    <div className = {styles.cardImgOther}>
                        <img src="../../images/bio/sectionmain03.jpg" alt=""/>
                        <div className = {styles.captionImg}>
                            <span>Il Baccio 158x217</span>    
                        </div>                        
                    </div>
                </div>
            </div>
            <div className = {styles.sectionBottom}>
                <div className = {styles.leftContent}>
                    <p>
                        <strong>Parallèlement à son travail personnel,</strong> Eric Fayolle exerce aussi une activité de design graphique
                        auprès d’institutions culturelles, identité visuelle et communication événementielle, et de cabinets
                        d’architectes, mise en couleur de bâtiments, signalétique, design architectural et de création de
                        timbres pour La Poste
                    </p>
                    <div className = {styles.containerImg}>
                        <div className = {styles.cardImg}>
                            <img src="../../images/bio/sectionbottom01.jpg" alt=""/>
                        </div>
                        <div className = {styles.cardImg}>
                            <img src="../../images/bio/sectionbottom02.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className = {styles.rightContent}>
                    <img src="../../images/bio/sectionbottom03.jpg" alt=""/>
                </div>
            </div>
            <div className = {styles.sectionEnd}>
                <div className = {styles.containerImg}>
                        <div className = {styles.cardImgOther}>
                            <img src="../../images/bio/sectionend01.jpg" alt=""/>                     
                        </div>
                        <div className = {styles.cardImg}>
                            <img src="../../images/bio/sectionend02.jpg" alt=""/>                       
                        </div>
                        <div className = {styles.cardImg}>
                            <img src="../../images/bio/sectionend03.jpg" alt=""/>                       
                        </div>
                </div>
                <div className = {styles.centeredImg}>
                    <img src="../../images/bio/sectionfooter01.jpg" alt=""/>
                    <img src="../../images/bio/sectionfooter02.jpg" alt=""/>
                </div>
            </div>
        </div>
    )

export default Bio