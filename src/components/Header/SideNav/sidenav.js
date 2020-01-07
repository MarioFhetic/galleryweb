import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItems from './sideNavItems'

const SideNaviguation = (props) => {
    return(
        <div>
            <SideNav
            showNav = {props.showNav}
            onHideNav = {props.onHideNav}
            >
                <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default SideNaviguation