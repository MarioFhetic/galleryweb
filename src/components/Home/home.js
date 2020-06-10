import React from "react";

import LogoHeader from "./LogoHeader/logoHeader";
import MiddleBar from "./MiddleBar/middleBar";
import CardList from "../../components/widgets/CardList/cardList";
import Footer from "../Footer/footer";

const Home = () => {
  return (
    <div>
      <LogoHeader />
      <MiddleBar />
      <CardList type="card" />
      <Footer />
    </div>
  );
};

export default Home;
