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
      {/* <div className={styles.firstImg}></div> */}
      <FirstBigImg />
      <div className={styles.containerSecondImg}>
        {/* <div className={styles.leftContentImg}></div> */}
        <LeftContentImg />
        {/* <div className={styles.rightContentImg}></div> */}
        <RightContentImg />
      </div>
      {/* <div className={styles.secondImg}></div> */}
      <SecondBigImg />
      {/* <div className={styles.thirdImg}></div> */}
      <ThirdBigImg />
    </div>
  );
};

export default Gallerie;
