import React, { Suspense, lazy } from "react";
import styles from "./principe.css";

const LogoPrincipe = lazy(() => import("../Logos/logoPrincipe"));
const PrincipeHeader = lazy(() => import("./principeHeader"));
const PrincipeBottom = lazy(() => import("./principeBottom"));

const Principe = () => (
  <div className={styles.bigContainer}>
    <LogoPrincipe />
    <PrincipeHeader />
    <Suspense fallback={<></>}>
      <PrincipeBottom />
    </Suspense>
  </div>
);

export default Principe;
