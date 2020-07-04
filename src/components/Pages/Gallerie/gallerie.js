import React from "react";
import styles from "./gallerie.css";

import FirstBigImg from "./firstBigImg";
import LeftContentImg from "./leftContentImg";
import RightContentImg from "./rightContentImg";
import SecondBigImg from "./secondBigImg";
import ThirdBigImg from "./thirdBigImg";

const Gallerie = () => {
  return (
    <div className={styles.bigContainer}>
      <FirstBigImg />
      <div className={styles.containerSecondImg}>
        <LeftContentImg />
        <RightContentImg />
      </div>
      <SecondBigImg />
      <ThirdBigImg />
    </div>
  );
};

export default Gallerie;
