import React from "react";
import SideNav from "react-simple-sidenav";
import style from "./sidenav.css";

import SideNavItems from "./sideNavItems";

const SideNaviguation = (props) => {
  return (
    <div className={style.sidenavContainer}>
      <SideNav showNav={props.showNav} onHideNav={props.onHideNav}>
        <SideNavItems {...props} />
      </SideNav>
    </div>
  );
};

export default SideNaviguation;
