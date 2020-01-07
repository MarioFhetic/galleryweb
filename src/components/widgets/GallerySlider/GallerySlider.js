import React, { Component } from "react";
import Slider from "react-slick";
import styles from './slider.css';
import {Link} from 'react-router-dom';
import './slick-theme.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.containerArrowRight}
      style={{transform: 'translate3d(0, -50%, 0) rotate(45deg)', transform: 'translate3d(0, -50%, 0) rotate(45deg)'}}
      onClick={onClick}
    ><a className = {styles.arrow} href=""></a></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.containerArrowLeft}
      style={{transform: 'translate3d(0, -50%, 0) rotate(-135deg)', transform: 'translate3d(0, -50%, 0) rotate(-135deg)'}}
      onClick={onClick}
    ><a className = {styles.arrow} href=""></a></div>
  );
}

export default class GallerySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      slickGoTo: 0,
    };
  }

  componentDidMount() {

    // this.slider1.slickGoTo(0, true);
    // this.slider2.slickGoTo(0, true);

    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
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

  render() {
    let index = this.state.slickGoTo;
    let serie = this.props.serie;
    let imageData = this.getImageData();
    let images = this.getImages();
    const settings = {
      dots: false,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className={styles.innerGallery}>
      <Link to = "/">
        <img className = {styles.returnArrow} src="../../images/left-arrow.png" alt=""/> 
      </Link>


       
        <div className={styles.dataSlider}>

          <div className = {styles.dataSlider_title}>
            <h1>Serie</h1>
            <h1>{serie}</h1>
          </div>
          <Slider
            initialSlide={index}
            dots={false}
            arrow={false}
            swipe = {false}
            fade = {true}
            focusOnSelect = {false}
            /* asNavFor={this.state.nav2} */
            ref={slider => (this.slider1 = slider)}
          >
              {imageData.length > 0 && imageData.map((item, i)=> {
                  return (
                      <div key={i}>
                          <h2>{item[0]}</h2>
                          <p>{item[1]}</p>
                          <p>{item[2]}</p>
                          <p>{item[3]}</p>
                          <p className={styles.lastP}>{item[4]}</p>
                      </div>
                  );
              })}
          </Slider>
        </div>
        <Slider
            {...settings}
            className={styles.imageSlider}
            asNavFor={this.state.nav1}
            adaptiveHeight = {true}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={1}
            centerMode = {false}
            swipeToSlide={true}
            fade = {false}
            dots = {true}
            focusOnSelect={false}
            initialSlide={index}
            slickSetOption ={{refresh: true}}
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