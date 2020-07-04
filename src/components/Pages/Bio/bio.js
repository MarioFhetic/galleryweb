import React from "react";
import styles from "./bio.css";

import LogoBio from "../Logos/logoBio";

import BioHeader from "./bioHeader";
import BioTop from "./bioTop";
import BioMain from "./bioMain";
import BioFooter from "./bioFooter";
import BioHalfEnd from "./bioHalfEnd";
import BioEnd from "./bioEnd";
import BioEndMobile from "./bioEndMobile";

import MediaQuery from "react-responsive";

const Bio = () => {
  return (
    <div className={styles.bigContainer}>
      <LogoBio />
      <BioHeader />
      <BioTop />
      <BioMain />
      <BioFooter />
      <MediaQuery query="(min-device-width: 1025px)">
        <BioHalfEnd />
        <BioEnd />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1024px)">
        <BioEndMobile />
      </MediaQuery>
    </div>
  );
};

export default Bio;
