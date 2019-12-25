import React, {Component} from 'react';
import SlickSlider from 'react-slick';
// import styleCarousel from "slick-carousel/slick/slick.css";
// import styleCarouselTheme from "slick-carousel/slick/slick-theme.css";

import {firebaseLooper, firebaseImage} from '../../../firebase'

import styles from './slider.css'

class Slider extends Component
{

    state = {
        nav1: null,
        nav2: null
        // gallery: [],
    }
    
    componentDidMount()
    {

        this.setState({
            nav1: '.imageSlider',
            nav2: '.dataSlider'
        });
        // this.setState({gallery: this.props.gallery})
        // console.log('************state',this.state)
    }

    afterSlideChange(oldIndex, newIndex){
        console.log('---------------------currentSlide',oldIndex, newIndex)
    }

    formatData(gallery){
        let link = this.props.link;
        let type = this.props.type;
        
        let settings = this.props.settings ? this.props.settings : {focusOnSelect: false, slidesToShow: 1, slidesToScroll: 1, cssEase: 'linear'};

        switch(type){
            case ('images'):
                settings = {...settings,
                    variableWidth: false,
                    dots: true, 
                };

                return (
                    <SlickSlider {...settings} 
                        className={"imageSlider"}
                        afterChange={this.afterSlideChange()}>
                        {gallery && gallery.map((item, i) => {
                        return (
                            <div className = {styles.test} key={i}>
                                <div className={styles.featured_item}>
                                    <div className={styles.featured_image}
                                        style={{background:`url(../images/${link}/${item.url})`}}>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </SlickSlider>   
                )
            break;
            // case ('data'):
            //     settings = {
            //         ...settings,
            //         arrows: false,
            //         // autoplay: true 
            //         // asNavFor: this.state.nav2
            //     }
            //     {/* className="dataSlider" */}
            //     return (
            //         <SlickSlider {...settings} className={'dataSlider'}>
            //             {gallery && gallery.map((item, i) => {
            //             return (
            //                 <div key={i}>
            //                     <div className="dataItem">
            //                         <p>{item.name}</p>
            //                         <p>{item.year}</p>
            //                         <p>{item.size}</p>
            //                         <p>{item.price}</p>
            //                         <p>{item.text}</p>
            //                     </div>
            //                 </div>
            //             )
            //         })}
            //         </SlickSlider>   
            //     )
            // break;
            default: 
                return (<p>Please reload the page</p>)
        }

        
    }

    render() {
        let gallery = this.props.gallery;


        return(
            this.formatData(gallery)
        )
    }
}

export default Slider;