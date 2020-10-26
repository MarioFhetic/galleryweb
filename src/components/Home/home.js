import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";

const CardList = lazy(() =>
  import("../../components/widgets/CardList/cardList")
);

const LogoHeader = lazy(() => import("./LogoHeader/logoHeader"));
const MiddleBar = lazy(() => import("./MiddleBar/middleBar"));
const Footer = lazy(() => import("../Footer/footer"));

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Galerie web d'Éric Fayolle" />
        <meta name="keywords" cpntent="galerie,photo,art,eric,fayolle" />
      </Helmet>
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
