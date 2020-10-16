import React from 'react';
import NavbarItems from './navbarItems';

import { AnimatePresence, motion } from "framer-motion";


const Navbar = () =>
{


    return(
        <AnimatePresence>
            <motion.div
            transition={{
            delay: 0.7,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            >
                <NavbarItems/>
            </motion.div>
        </AnimatePresence>
    )
}

export default Navbar;