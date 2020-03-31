import React from 'react';
import SideNav from 'react-simple-sidenav';
import Logo_Header from '../../Home/LogoHeader/logoHeader';
import style from './sidenav.css';


import SideNavItems from './sideNavItems'

const SideNaviguation = (props) => {
    return(
        <div className = {style.sidenavContainer}>
            <SideNav
            showNav = {props.showNav}
            onHideNav = {props.onHideNav}
            >
                {/* <Logo_Header/> */}
                <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default SideNaviguation