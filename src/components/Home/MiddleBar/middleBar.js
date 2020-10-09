import React from "react";
import MiddleBarItems from "./middleBarItems";
import { motion } from "framer-motion";

const MiddleBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
      animate={{
        opacity: 1,
      }}
    >
      <MiddleBarItems />
    </motion.div>
  );
};

export default MiddleBar;
