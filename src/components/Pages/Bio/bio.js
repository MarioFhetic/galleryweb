import React, { Suspense, lazy } from "react";
import styles from "./bio.css";
import MediaQuery from "react-responsive";

const LogoBio = lazy(() => import("../Logos/logoBio"));

const BioHeader = lazy(() => import("./bioHeader"));
const BioTop = lazy(() => import("./bioTop"));
const BioMain = lazy(() => import("./bioMain"));

const BioFooter = lazy(() => import("./bioFooter"));

const BioHalfEnd = lazy(() => import("./bioHalfEnd"));

const BioEnd = lazy(() => import("./bioEnd"));

const BioEndMobile = lazy(() => import("./bioEndMobile"));

const Bio = () => {
  return (
    <div className={styles.bigContainer}>
      <LogoBio />
      <BioHeader />
      <BioTop />

      <Suspense fallback={<></>}>
        <BioMain />
      </Suspense>
      <Suspense fallback={<></>}>
        <BioFooter />
      </Suspense>

      <Suspense fallback={<></>}>
        <MediaQuery query="(min-device-width: 1025px)">
          <BioHalfEnd />
          <BioEnd />
        </MediaQuery>
      </Suspense>
      <Suspense fallback={<></>}>
        <MediaQuery query="(max-device-width: 1024px)">
          <BioEndMobile />
        </MediaQuery>
      </Suspense>
    </div>
  );
};

export default Bio;
