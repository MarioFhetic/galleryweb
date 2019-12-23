import React from 'react';
import style from './navbar.css'

import {Link} from 'react-router-dom';


const NavbarItems = () => 
{

    const items = [
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
        text : 'photographies originales numérotées et signées',
        link : '/',
    },

    {        
        type : style.option,
        text : 'galerie',
        link : '/galerie',
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
                    <Link to = {item.link}>
                        {item.text}
                    </Link>
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