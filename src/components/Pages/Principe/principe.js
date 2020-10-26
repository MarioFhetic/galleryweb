import React, { Suspense, lazy } from "react";
import styles from "./principe.css";
import { Helmet } from "react-helmet";

const LogoPrincipe = lazy(() => import("../Logos/logoPrincipe"));
const PrincipeHeader = lazy(() => import("./principeHeader"));
const PrincipeBottom = lazy(() => import("./principeBottom"));

const Principe = () => (
  <div className={styles.bigContainer}>
    <Helmet>
      <title>Principe</title>
      <meta name="description" content="Page principe d'Éric Fayolle" />
      <meta name="keywords" cpntent="principe,photo,art,eric,fayolle" />
    </Helmet>
    <LogoPrincipe />
    <PrincipeHeader />
    <Suspense fallback={<></>}>
      <PrincipeBottom />
    </Suspense>
  </div>
);

export default Principe;
