import React, { Suspense, lazy } from "react";

const CardList = lazy(() =>
  import("../../components/widgets/CardList/cardList")
);

const LogoHeader = lazy(() => import("./LogoHeader/logoHeader"));
const MiddleBar = lazy(() => import("./MiddleBar/middleBar"));
const Footer = lazy(() => import("../Footer/footer"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
        <LogoHeader />
      </Suspense>
      <Suspense fallback={<></>}>
        <MiddleBar />
      </Suspense>
      <CardList type="card" />
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
