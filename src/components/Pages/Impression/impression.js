import React from "react";
import styles from "./impression.css";

import LogoImpression from "../Logos/logoImpression";

import ImpressionMain from "./impressionMain";
import ImpressionBottom from "./impressionBottom";
import ImpressionHeader from "./impressionHeader";

const Impression = () => {
  return (
    <div className={styles.bigContainer}>
      <LogoImpression />
      <ImpressionHeader />
      <ImpressionMain />
      <ImpressionBottom />
    </div>
  );
};

export default Impression;
