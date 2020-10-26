import React, { Suspense, lazy } from "react";
import styles from "./impression.css";
import { Helmet } from "react-helmet";

const LogoImpression = lazy(() => import("../Logos/logoImpression"));
const ImpressionMain = lazy(() => import("./impressionMain"));
const ImpressionBottom = lazy(() => import("./impressionBottom"));
const ImpressionHeader = lazy(() => import("./impressionHeader"));

const Impression = () => {
  return (
    <div className={styles.bigContainer}>
      <Helmet>
        <title>Impression</title>
        <meta name="description" content="Page d'impression d'Éric Fayolle" />
        <meta name="keywords" cpntent="impression,photo,art,eric,fayolle" />
      </Helmet>
      <LogoImpression />
      <ImpressionHeader />
      <Suspense fallback={<></>}>
        <ImpressionMain />
      </Suspense>
      <Suspense fallback={<></>}>
        <ImpressionBottom />
      </Suspense>
    </div>
  );
};

export default Impression;
