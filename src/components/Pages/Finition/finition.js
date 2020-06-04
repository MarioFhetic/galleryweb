import React, { useRef } from "react";
import styles from "./finition.css";

import LogoFinition from "../Logos/logoFinition";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import MediaQuery from "react-responsive";

// Components
import FinitionHeader from "./finitionHeader";

const Finition = () => {
  const parallax = useRef(null);
  return (
    <div>
      <MediaQuery query="(min-device-width: 1025px)">
        <Parallax ref={parallax} pages={4.5}>
          <ParallaxLayer offset={0}>
            <LogoFinition />
            <FinitionHeader />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1.4}>
            <div className={styles.firstImgContainer}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.999} speed={1}>
            <div className={styles.secondImgContainer}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1.5}>
            <div className={styles.bigContainer}>
              <div className={styles.titleSection}>
                <h2>CONTRECOLLAGE + CAISSE AMÉRICAINE</h2>
              </div>
              <div className={styles.section}>
                <div className={styles.leftContentSecond}>
                  <p>
                    La photographie est contrecollée de façon permanente sur une
                    plaque rigide de Dibond™ de 3 mm d’épaisseur au format exact
                    de l'image
                  </p>
                  <div className={styles.containerImgSecond}>
                    <img
                      src="../../images/finitions/firstimgsection2left.jpg"
                      alt="Photographie faite en contre collé et chassis alumminium"
                    />
                  </div>
                  <p>
                    L’ensemble est intégré dans un cadre en bois naturel, noir
                    ou blanc. Largeur de la bordure du cadre, 9 mm, profondeur
                    35 mm.
                  </p>
                </div>
                <div className={styles.rightContentSecond}>
                  <img
                    src="../../images/finitions/secondimgsection2right.png"
                    alt="Photographie faite en contre collé et chassis alumminium"
                  />
                </div>
              </div>
              <div className={styles.infoSection}>
                <p>
                  UN CADRE SANS VERRE, SOBRE ET ELEGANT QUI MET EN VALEUR LE
                  GRAIN DU PAPIER SANS AUCUN REFLET.
                </p>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.999} speed={1}>
            <div className={styles.thirdImgContainer}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.999} speed={3}>
            <div className={styles.fourthImgContainer}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.1} speed={1.5}>
            <div className={styles.bigContainer}>
              <div className={styles.titleSectionPlexicollage}>
                <h2>PLEXICOLLAGE</h2>
              </div>
              <div className={styles.containerPlexicollage}>
                <div className={styles.leftSectionPlexicollage}>
                  <p>
                    Impression de l’image sur papier photo brillant Fuji 240g.
                    Ce papier restitue des noirs profonds et détaillés ainsi que
                    des blancs éclatants.
                  </p>
                  <p>
                    L’image est ensuite contrecollé sous un verre acrylique
                    transparent de 4 mm. L'adhérence est réalisée sans colle par
                    la réaction chimique entre deux composants liquides. Le
                    système est totalement dépourvu de poussière, de bulles
                    d'air et de traces de colle.
                  </p>
                  <p>
                    Une plaque d’Alu Dibond est appliquée au dos du tirage ainsi
                    qu’un châssis rentrant qui offre un excellente rigidité et
                    une accroche décollée du mur.
                  </p>
                  <p>
                    Une netteté d'image inégalée, le contraste des couleurs est
                    accentué et l'image acquiert une nouvelle profondeur sur
                    toute la surface et la protège à 99,7% contre les rayons UV.
                  </p>
                </div>
                <div className={styles.rightSectionPlexicollage}>
                  <img
                    src="../../images/finitions/firstimgthirdsection.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.infoSectionPlexicollage}>
                <p>
                  Le plexicollage donne aux images une brillance intense et un
                  effect de profondeur unique.
                </p>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.999} speed={1}>
            <div className={styles.secondLastImgContainer}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.999} speed={3}>
            <div className={styles.lastImgContainer}></div>
          </ParallaxLayer>
        </Parallax>
      </MediaQuery>

      {/* RETURN TEMPLATE WITHOUT PARALLAX IF WIDTH < 1024 */}

      <MediaQuery query="(max-device-width: 1024px)">
        <div className={styles.bigContainer}>
          <LogoFinition />
          <FinitionHeader />

          <div className={styles.firstImgContainer}></div>
          <div className={styles.infoSectionBigImg}>
            <p>CONTRECOLLAGE DIBOND ET CHASSIS</p>
          </div>

          {/* <div className={styles.infoSectionBigImg}>
        <p>CONTRECOLLÉ DIBOND ET CHASSIS</p>
      </div> */}
          <div className={styles.secondImgContainer}></div>
          <div className={styles.infoSectionBigImg}>
            <p>CONTRECOLLAGE ALUMINIUM ET CHASSIS</p>
          </div>

          {/* SECOND SECTION */}

          <div className={styles.titleSection}>
            <h2>CONTRECOLLAGE + CAISSE AMÉRICAINE</h2>
          </div>
          <div className={styles.section}>
            <div className={styles.leftContentSecond}>
              <p>
                La photographie est contrecollée de façon permanente sur une
                plaque rigide de Dibond™ de 3 mm d’épaisseur au format exact de
                l'image
              </p>
              <div className={styles.containerImgSecond}>
                <img
                  src="../../images/finitions/firstimgsection2left.jpg"
                  alt="Photographie faite en contre collé et chassis alumminium"
                />
              </div>
              <p>
                L’ensemble est intégré dans un cadre en bois naturel, noir ou
                blanc. Largeur de la bordure du cadre, 9 mm, profondeur 35 mm.
              </p>
            </div>
            <div className={styles.rightContentSecond}>
              <img
                src="../../images/finitions/secondimgsection2right.png"
                alt="Photographie faite en contre collé et chassis alumminium"
              />
            </div>
          </div>
          <div className={styles.infoSection}>
            <p>
              UN CADRE SANS VERRE, SOBRE ET ELEGANT QUI MET EN VALEUR LE GRAIN
              DU PAPIER SANS AUCUN REFLET.
            </p>
          </div>
          <div className={styles.thirdImgContainer}>
            {/* <div className={styles.overlayImgContainer}></div> */}
            {/* <div className={styles.infoBigImg}>
          <p>contrecollage dibond et chassis</p>
        </div> */}
          </div>
          <div className={styles.infoSectionBigImg}>
            <p>CAISSE AMÉRICAINE ET CONTRECOLLÉ DIBOND</p>
          </div>
          <div className={styles.fourthImgContainer}></div>
          {/* <div className={styles.infoSectionBigImg}>
        <p>CONTRECOLLAGE ALUMINIUM ET CHASSIS</p>
      </div> */}

          {/* THIRD SECTION */}

          <div className={styles.titleSection}>
            <h2>PLEXICOLLAGE</h2>
          </div>
          <div className={styles.containerPlexicollage}>
            <div className={styles.leftSectionPlexicollage}>
              <p>
                Impression de l’image sur papier photo brillant Fuji 240g. Ce
                papier restitue des noirs profonds et détaillés ainsi que des
                blancs éclatants.
              </p>
              <p>
                L’image est ensuite contrecollé sous un verre acrylique
                transparent de 4 mm. L'adhérence est réalisée sans colle par la
                réaction chimique entre deux composants liquides. Le système est
                totalement dépourvu de poussière, de bulles d'air et de traces
                de colle.
              </p>
              <p>
                Une plaque d’Alu Dibond est appliquée au dos du tirage ainsi
                qu’un châssis rentrant qui offre un excellente rigidité et une
                accroche décollée du mur.
              </p>
              <p>
                Une netteté d'image inégalée, le contraste des couleurs est
                accentué et l'image acquiert une nouvelle profondeur sur toute
                la surface et la protège à 99,7% contre les rayons UV.
              </p>
            </div>
            <div className={styles.rightSectionPlexicollage}>
              <img
                src="../../images/finitions/firstimgthirdsection.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.infoSection}>
            <p>
              Le plexicollage donne aux images une brillance intense et un
              effect de profondeur unique.
            </p>
          </div>
          {/* <div className={styles.section}>
        <div className={styles.leftContentThird}> */}
          {/* <p>
            Impression de l’image sur papier photo brillant Fuji 240g. Ce papier
            restitue des noirs profonds et détaillés ainsi que des blancs
            éclatants.
          </p>
          <p>
            L’image est ensuite contrecollé sous un verre acrylique transparent
            de 4 mm. L'adhérence est réalisée sans colle par la réaction
            chimique entre deux composants liquides. Le système est totalement
            dépourvu de poussière, de bulles d'air et de traces de colle.
          </p>
          <p>
            Une plaque d’Alu Dibond est appliquée au dos du tirage ainsi qu’un
            châssis rentrant qui offre un excellente rigidité et une accroche
            décollée du mur.
          </p>
          <p>
            Une netteté d'image inégalée, le contraste des couleurs est accentué
            et l'image acquiert une nouvelle profondeur sur toute la surface et
            la protège à 99,7% contre les rayons UV.
          </p> */}
          {/* </div> */}
          {/* <div className={styles.rightContentThird}>
          <img
            src="../../images/finitions/firstimgthirdsection.jpg"
            alt="Photographie faite en contre collé et chassis alumminium"
          />
        </div> */}
          {/* </div> */}
          {/* <div className={styles.infoSection}>
        <p>
          LE PLEXICOLLAGE DONNE AUX IMAGES UNE BRILLANCE INTENSE ET UN EFFET DE
          PROFONDEUR UNIQUE.
        </p>
      </div> */}
          <div className={styles.lastImgContainer}>
            {/* <div className={styles.overlayImgContainer}></div> */}
            {/* <div className={styles.infoBigImg}>
          <p>contrecollage dibond et chassis</p>
        </div> */}
          </div>
          <div className={styles.infoSectionBigImg}>
            <p>PLEXICOLLAGE ET CONTRECOLLAGE SUR ALU DIBOND</p>
          </div>
          <div className={styles.secondLastImgContainer}></div>
          <div className={styles.infoSectionBigImg}>
            <p>OPTION CHASSIS EN BOIS DE 6 CM DE PROFONDEUR</p>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Finition;
