import React from "react";
import styles from "./contact.css";

import LogoContact from "../Logos/logoContact";
import Fade from "react-reveal/Fade";

// SOCIAL ICONS

import { ReactComponent as LogoFacebook } from "./facebook.svg";
import { ReactComponent as LogoInstagram } from "./instagram.svg";
import { ReactComponent as LogoPinterest } from "./pinterest.svg";

const Contact = () => (
  <Fade duration={2500}>
    <div className={styles.bigContainer}>
      <LogoContact />
    </div>
    <div className={styles.bigImg}>
      <div className={styles.containerText}>
        <span>ERIC FAYOLLE</span>
        <span>154 RUE OBERKAMPF</span>
        <span>75011 PARIS</span>
        <span>+ 33 (0)1 40 21 73 43</span>
        <a href="mailto:contact@ericfayolle.com">
          <span className={styles.contactSpan}>contact@ericfayolle.com</span>
        </a>
        <div className={styles.containerLogos}>
          <a href="https://www.instagram.com/ericfayolle/?hl=fr">
            <LogoFacebook></LogoFacebook>
          </a>
          <a href="https://www.instagram.com/ericfayolle/?hl=fr">
            <LogoInstagram></LogoInstagram>
          </a>
          <a href="https://www.instagram.com/ericfayolle/?hl=fr">
            <LogoPinterest></LogoPinterest>
          </a>
        </div>
      </div>
    </div>
  </Fade>
);

export default Contact;
