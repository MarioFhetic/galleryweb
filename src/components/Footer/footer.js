import React from "react";
import styles from "./footer.css";
import Fade from "react-reveal/Fade";

const Footer = () => (
  <Fade delay={1800}>
    <div className={styles.infoCopyright}>
      <span>
        © 2020 Eric Fayolle <span className={styles.divider}>|</span>{" "}
        <a href="mailto:fayollemario@gmail.com">
          <span>Design - Développement Mario Fayolle</span>
        </a>
      </span>
    </div>
  </Fade>
);

export default Footer;
