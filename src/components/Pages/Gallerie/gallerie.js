import React, { Suspense, lazy } from "react";
import styles from "./gallerie.css";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Galerie</title>
        <meta name="description" content="Page de galerie d'Éric Fayolle" />
        <meta name="keywords" cpntent="galerie,photo,art,eric,fayolle" />
      </Helmet>
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
