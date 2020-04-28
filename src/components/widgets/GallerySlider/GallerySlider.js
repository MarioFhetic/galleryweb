import React, { Component, useState } from "react";
import Slider from "react-slick";
import styles from './slider.css';
import {Link} from 'react-router-dom';
import test from'./slick-theme.css';
import { CSSTransition } from "react-transition-group";
import Fade from 'react-reveal/Fade';


// import {CSSTransition, TransitionGroup} from 'react-transition-group'

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={styles.arrowNext}
//       style={{position: "absolute", top:"50%", right: "-5%", transform: "rotate(-45deg)", WebkitTransform: "rotate(-45deg)", zIndex: 1000}}
//       onClick={onClick}
//     ></button>
//   );
// }
//
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={styles.arrowPrev}
//       style={{position: "absolute", top:"50%", right: "-3%", transform: "rotate(130deg)", WebkitTransform: "rotate(130deg)", zIndex: 1000}}
//       onClick={onClick}
//     ></button>
//   );
// }


export default class GallerySlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleIndex: 0
    };
  }
  getImageData(){
    let gallery = this.props.gallery;
    let imageData = [];

    gallery.length > 0 && gallery.map((item, index) => {
        let foo = [item.name, item.year, item.price, item.size, item.text]
        imageData = [...imageData, foo]
        return imageData;
    });

    return imageData;
  }

  getImages(){
    let gallery = this.props.gallery;
    let link = this.props.link;
    let images = [];

    gallery.length > 0 && gallery.map((item, index) => {
        images = [...images, `../images/${link}/${item.url}` ]
        return images;
    });

    return images;
  }

  componentWillMount()
  {
    // this.setState({
    //   // nav1: this.slider1,
    //   // nav2: this.slider2,
    //   serie: this.props && this.props.serie
    // });
  }

  componentDidMount() {

  }

  nextSlide(){
    let {visibleIndex} = this.state;
    let limit = this.props.gallery && this.props.gallery.length;

    if (visibleIndex < limit-1) {
      this.setState({
        visibleIndex: visibleIndex + 1
      })
    } else {
      this.setState({
        visibleIndex: 0
      })
    }
  }
  prevSlide(){
    let {visibleIndex} = this.state;
    let limit = this.props.gallery && this.props.gallery.length;

    if (visibleIndex !== 0) {
      this.setState({
        visibleIndex: visibleIndex - 1
      })
    } else {
      this.setState({
        visibleIndex: limit - 1
      })
    }
  }

  render() {
    let index = this.state.visibleIndex;
    let imageData = this.getImageData();
    let images = this.getImages();

    // let serie = this.props.serie;

    // const settings = {
    //   dots: false,
    //   arrows: true,
    //   initialSlide: 0,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
    //   slidesToShow: 1
    // };

    //FIX THE SLIDER NOT RENDERING BEFORE FIRST CLICK
    // this.slider2 && this.slider2.slickGoTo(0)

    return (
      <div className="wrap">


        <div className={styles.innerGallery}>

          <div className={styles.sliderWrap}>
            {imageData.length > 0 && imageData.map((item, i)=> {
              function testRegex() {
                let regex = /(-)(?= )/gm;
                return {__html: item[4].replace(regex, "<br/>")};
              };

              if (index === i ) {
                return (
                  <div key={i} className = {styles.dataWrap}>
                    <div className = {styles.data_title}>
                      <h1><span> Série</span> | {this.props.serie}</h1>
                      <h2>{item[0]}</h2>
                    </div>
                    <div className = {styles.dataSubData}>
                      <p>{item[1]}</p>
                      <p>{item[2]}</p>
                      <p>{item[3]}</p>
                      <p className={styles.lastP} dangerouslySetInnerHTML={testRegex()}></p>
                    </div>
                  </div>
                );
              }
              return false;
            })}


            <div className={styles.imageWrap}>
              <div className={styles.controls}>
                <div className = {styles.arrow} onClick={() => {this.prevSlide()}}></div>
                <div className = {styles.arrow} onClick={() => {this.nextSlide()}}></div>
              </div>

              <div className = {styles.counterSlide}>
                <div>{this.state.visibleIndex + 1}</div>
                <div>/</div>
                <div>{images.length}</div>
              </div>
                {images.length > 0 && images.map((item, i) => {
                  if (index === i) {
                    return (
                      <Fade duration = {1500} key = {i}>
                        <img key={i} src={item} className={styles.image} alt="#"/>            

                      </Fade>
                    );
                  }
                  return false;
                })}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
