import React from 'react';
import style from './middleBar.css'

import {Link} from 'react-router-dom';


const MiddleBarItems = () => 
{
    const items = [
    {        
        type : style.option,
        text : 'Lost in abstraction',
        link : 'gallery/lost-in-abstraction',
    },   
    {        
        type : style.option,
        text : 'Chute de pierre',
        link : 'gallery/chute-de-pierre',
    },

    {        
        type : style.option,
        text : 'Vestiges',
        link : 'gallery/vestiges',
    },

    {        
        type : style.option,
        text : 'Still Alive',
        link : 'gallery/still-alive',
    },

    {        
        type : style.option,
        text : 'Cinecitta',
        link : 'gallery/cinecitta',
    },

    {        
        type : style.option,
        text : 'New York',
        link : 'gallery/new-york',
    },

    {        
        type : style.option,
        text : 'Portraits',
        link : 'gallery/portraits',
    },

    {        
        type : style.option,
        text : 'Italie',
        link : 'gallery/italie',
    },

    {        
        type : style.option,
        text : 'Foro Italico',
        link : 'gallery/foro-italico',
    },

    {        
        type : style.option,
        text : 'Mexique',
        link : 'gallery/mexique',
    },
    {        
        type : style.option,
        text : 'Emballages',
        link : 'gallery/emballages',
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
        <div className = {style.containerMiddleBar}>
            <div className = {style.middleBar}>
                {showItems()}
            </div>
        </div>

    )
}

export default MiddleBarItems;