import React from 'react';
import style from './navbar.css'

import {NavLink} from 'react-router-dom';


const NavbarItems = () => 
{

    const items = [
    {        
        type : style.option,
        text : 'home',
        link : '/',
    },
    {        
        type : style.option,
        text : 'bio',
        link : '/bio',
    },

    {        
        type : style.option,
        text : 'principe',
        link : '/principe',
    },

    {        
        type : style.option,
        text : 'impression',
        link : '/impression',
    },

    {        
        type : style.option,
        text : 'finition',
        link : '/finition',
    },

    {        
        type : style.option,
        text : 'galerie',
        link : '/gallery',
    },

    {        
        type : style.option,
        text : 'contact',
        link : '/contact',
    },

    ]



    const showItems = () =>
    {
        return items.map((item, i) => {
            return(
                <div key = {i} className = {item.type}>
                    <NavLink exact to = {item.link} activeClassName = {style.active}>
                        {item.text}
                    </NavLink>
                </div>
            )
        })
    }

    return(
        <nav className = {style.navbar}>
            {showItems()}
        </nav>
    )
}

export default NavbarItems;