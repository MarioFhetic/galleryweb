import React from "react";
import styles from "./footer.css";
import { AnimatePresence, motion } from "framer-motion";
import CookieConsent from "react-cookie-consent";



const Footer = () => (
  <AnimatePresence>
    <motion.div className={styles.infoCopyright}
      transition={{
        delay: 1.8,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
        <span>
          © 2020 Eric Fayolle <span className={styles.divider}>|</span>{" "}
          <a href="http://mario.fayolle.com/">
            <span>Design - Développement - Mario Fayolle</span>
          </a>
        </span>
    </motion.div>

    {/* <CookieConsent
    location="bottom"
    debug = {true}
    buttonText="Accepter"
    cookieName="myAwesomeCookieName"
    style={{ background: "white", color: "black", fontSize: "16px" }}
    overlay = {true}
    buttonStyle={{ color: "black", fontSize: "13px" }}
    expires={150}
    enableDeclineButton flipButtons
    declineButtonText = "Refuser"
    >
      L'utilisation de cookie sur ce site à pour unique but de connaître les séries de photos les plus vues.{" "}
    </CookieConsent> */}
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}

  </AnimatePresence>

);

export default Footer;
