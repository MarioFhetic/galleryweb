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
      <LogoHeader />
      <MiddleBar />
      <Suspense fallback={<></>}>
        <CardList type="card" />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
