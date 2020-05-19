import React, { Component, useState } from "react";
import styles from './slider.css';
import Fade from 'react-reveal/Fade';

import { ReactComponent as PrevArrow } from "./flecheprev.svg";
import { ReactComponent as NextArrow } from "./flechenext.svg";



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

    return (
      <div>
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
                      <h1><span> Série |</span> {this.props.serie}</h1>
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

            <div className = {styles.containerAllControl}>
              <PrevArrow onClick={() => {this.prevSlide()}}/>
              <NextArrow onClick={() => {this.nextSlide()}}/>
              <div className= {styles.counterSlides}>
                <span onClick={() => {this.prevSlide()}}>{this.state.visibleIndex + 1}</span>
                <span>|</span>
                <span onClick={() => {this.nextSlide()}}>{images.length}</span>
              </div>
            </div>

            <div className={styles.imageWrap}>
                {images.length > 0 && images.map((item, i) => {
                  if (index === i) {
                    return (
                      <Fade
                        key = {i}>
                          <img key={i} src={item} className={styles.image} alt={this.props.serie} />
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
