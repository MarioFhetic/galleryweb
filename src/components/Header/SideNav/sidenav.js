import React from 'react';
import SideNav from 'react-simple-sidenav';

const SideNaviguation = (props) => {
    return(
        <div>
            <SideNav
            showNav = {props.showNav}
            onHideNav = {props.onHideNav}
            >
                options
            </SideNav>
        </div>
    )
}

export default SideNaviguation