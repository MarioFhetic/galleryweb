import React, { Component } from "react";
import Slider from "react-slick";
import styles from './slider.css';
import {Link} from 'react-router-dom';
import test from'./slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={styles.arrowNext}
      style={{position: "absolute", top:"50%", right: "-5%", transform: "rotate(-45deg)", WebkitTransform: "rotate(-45deg)", zIndex: 1000}}
      onClick={onClick}
    ></button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={styles.arrowPrev}
      style={{position: "absolute", top:"50%", right: "-3%", transform: "rotate(130deg)", WebkitTransform: "rotate(130deg)", zIndex: 1000}}
      onClick={onClick}
    ></button>
  );
}


export default class GallerySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
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
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  componentDidMount() {
    //Unecessary tu peux delete :
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    let serie = this.props.serie;
    let imageData = this.getImageData();
    let images = this.getImages();
    const settings = {
      dots: false,
      arrows: true,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 1
    };

    //FIX THE SLIDER NOT RENDERING BEFORE FIRST CLICK
    this.slider2 && this.slider2.slickGoTo(0)

    return (

      <div className={styles.innerGallery}>

        <div className={styles.dataSlider}>

          <div className = {styles.dataSlider_title}>
            <h1><span> Série</span> | {serie}</h1>
          </div>
          <Slider
            dots={false}
            arrow={false}
            swipe = {false}
            fade = {true}
            focusOnSelect = {false}
            slidesToShow={1}
            asNavFor={this.slider2}
            ref={slider => (this.slider1 = slider)}
          >
              {imageData.length > 0 && imageData.map((item, i)=> {

                  function testRegex() {
                    let regex = /(-)(?= )/gm;
                    return {__html: item[4].replace(regex, "<br/>")};
                  };

                  return (
                      <div key={i} className = {styles.dataSlider_data}>
                          <h2>{item[0]}</h2>
                          <div className = {styles.secondaryData}>
                            <p>{item[1]}</p>
                            <p>{item[2]}</p>
                            <p>{item[3]}</p>
                            <p className={styles.lastP} dangerouslySetInnerHTML={testRegex()}></p>
                          </div>
                      </div>
                  );
              })}
          </Slider>
        </div>
        <Slider
            {...settings}
            initialSlide = {1}
            className={styles.imageSlider}
            asNavFor={this.slider1}
            adaptiveHeight = {true}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={1}
            centerMode = {false}
            swipeToSlide={true}
            fade = {true}
            dots = {true}
            focusOnSelect={false}
        >
            {images.length > 0 && images.map((item, index) => {
                return (
                    <div key={item}>
                        <img src={item} className={styles.slickImg} alt="#"/>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
  }
}
