import React from 'react';
import NavbarItems from './navbarItems';
import Fade from 'react-reveal/Fade';

const Navbar = () =>
{


    return(
        <Fade delay = {700}>
            <NavbarItems/>
        </Fade>
    )
}

export default Navbar;