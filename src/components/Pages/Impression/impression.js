import React, { Suspense, lazy } from "react";
import styles from "./impression.css";

const LogoImpression = lazy(() => import("../Logos/logoImpression"));
const ImpressionMain = lazy(() => import("./impressionMain"));
const ImpressionBottom = lazy(() => import("./impressionBottom"));
const ImpressionHeader = lazy(() => import("./impressionHeader"));

const Impression = () => {
  return (
    <div className={styles.bigContainer}>
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
