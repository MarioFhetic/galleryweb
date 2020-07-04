// import React from "react";

// import LogoHeader from "./LogoHeader/logoHeader";
// import MiddleBar from "./MiddleBar/middleBar";
// import CardList from "../../components/widgets/CardList/cardList";
// import Footer from "../Footer/footer";

// const Home = () => {
//   return (
//     <div>
//       <LogoHeader />
//       <MiddleBar />
//       <CardList type="card" />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { Suspense, lazy } from "react";

import CardList from "../../components/widgets/CardList/cardList";

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
