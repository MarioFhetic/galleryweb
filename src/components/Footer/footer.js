import React from 'react';
import style from './footer.css';
import styles from './footer.css';
import Fade from 'react-reveal/Fade';



const Footer = () =>
    (
        <Fade delay = {800}>
            <div className = {styles.infoCopyright}>
                <span>
                © 2020 Eric Fayolle <span className = {styles.divider}>|</span> Développement Mario Fayolle
                </span>
            </div>
        </Fade>

    )

export default Footer;