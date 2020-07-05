import React, { Suspense, lazy } from "react";
import styles from "./gallerie.css";

// import FirstBigImg from "./firstBigImg";
// import LeftContentImg from "./leftContentImg";
// import RightContentImg from "./rightContentImg";
// import SecondBigImg from "./secondBigImg";
// import ThirdBigImg from "./thirdBigImg";

const FirstBigImg = lazy(() => import("./firstBigImg"));
const LeftContentImg = lazy(() => import("./leftContentImg"));
const RightContentImg = lazy(() => import("./rightContentImg"));
const SecondBigImg = lazy(() => import("./secondBigImg"));
const ThirdBigImg = lazy(() => import("./thirdBigImg"));

const Gallerie = () => {
  return (
    <div className={styles.bigContainer}>
      <FirstBigImg />
      <div className={styles.containerSecondImg}>
        <LeftContentImg />
        <RightContentImg />
      </div>
      <Suspense fallback={<></>}>
        <SecondBigImg />
      </Suspense>
      <Suspense fallback={<></>}>
        <ThirdBigImg />
      </Suspense>
    </div>
  );
};

export default Gallerie;
