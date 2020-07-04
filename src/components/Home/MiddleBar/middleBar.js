import React from "react";
import MiddleBarItems from "./middleBarItems";
import Fade from "react-reveal/Fade";

const MiddleBar = () => {
  return (
    <Fade delay={1000}>
      <MiddleBarItems />
    </Fade>
  );
};

export default MiddleBar;
