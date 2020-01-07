import React from 'react';
import styles from './SideNav/sidenav.css';
import SideNav from './SideNav/sidenav.js'



const HeaderSideNav = (props) =>
{

    const navBars = () => 
        (
            <div className = {styles.sidenavBar}>
                <div onClick = {props.onOpenNav} className = {styles.burger}>
                    <div className = {styles.burgerlines}></div>
                </div>
            </div>
        )
    
    return(
        
        <header className = {styles.header}>
            <SideNav {...props}/>
            <div className = {styles.headerOption}>
                {navBars()}
            </div>
        </header>
    )
}

export default HeaderSideNav;