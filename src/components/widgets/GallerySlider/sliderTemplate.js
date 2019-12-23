import React from 'react';
import Slick from 'react-slick';

import styles from './slider.css'


// props de SliderTemplate sera le liens de mes images + info + description
const SliderTemplate = (props) =>
{

    let template = null
    
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slideToShow: 1,
        variableWidth: false,
        fade: true,
        cssEase: 'linear',
        centerMode: true,
    }

    // console.log('props', props);

    switch(props.type)
    {
        
        case ("chute-de-pierre"):
            template = props.data[0] && props.data[0].gallery.map((item, i ) =>
            {
                return(
                    <div className = {styles.test} key={i}>
                        <div className={styles.featured_item}>
                            <div className={styles.featured_image}
                                style={{
                                    background:`url(../images/${item.serie}/${item.url})`
                                }}>
                            </div>

                       </div>
                    </div>
                )
            })
            break;
    //     case ('vestiges'):
    //             template = props.data[1] && props.data[1].gallery.map((item, i ) =>
    //             {
    //                 return(
    //                     <div key={i}>
    //                         <div className={styles.featured_item}>
    //                             {item.description}
    //                             <div className={styles.featured_image}
    //                                 style={{
    //                                     background:`url(../images/${item.name}/${item.imageUrl})`
    //                                 }}>
    //                             </div>
    
    //                        </div>
    //                     </div>
    //                 )
    //             })
    //         break;
    //         case ('still-alive'):
    //                 template = props.data[2] && props.data[2].gallery.map((item, i ) =>
    //                 {
    //                     return(
    //                         <div key={i}>
    //                             <div className={styles.featured_item}>
        
    //                                 <div className={styles.featured_image}
    //                                     style={{
    //                                         background:`url(../images/${item.name}/${item.imageUrl})`
    //                                     }}>
    //                                 </div>
        
    //                            </div>
    //                         </div>
    //                     )
    //                 })
    //             break;

        default:
            template = null
    }

    return(
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplate;