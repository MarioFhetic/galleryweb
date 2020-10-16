import React from "react";
import styles from "./footer.css";
import { AnimatePresence, motion } from "framer-motion";


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
  </AnimatePresence>

);

export default Footer;
