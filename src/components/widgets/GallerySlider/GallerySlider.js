import React, { Component, useState } from "react";
import Slider from "react-slick";
import styles from './slider.css';
import {Link} from 'react-router-dom';
import test from'./slick-theme.css';
import { CSSTransition } from "react-transition-group";
import Fade from 'react-reveal/Fade';


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

            <div className={styles.controls}>
              <div className = {styles.arrow} onClick={() => {this.prevSlide()}}></div>
              <div className = {styles.arrow} onClick={() => {this.nextSlide()}}></div>
            </div>

            <div className = {styles.counterSlide}>
              <div>{this.state.visibleIndex + 1}</div>
              <div>/</div>
              <div>{images.length}</div>
            </div>


            <div className={styles.imageWrap}>
                {images.length > 0 && images.map((item, i) => {
                  if (index === i) {
                    return (
                      <Fade
                        disabled
                        key = {i}>
                          <img key={i} src={item} className={styles.image} alt={this.props.serie} />
                      </Fade>
                    );
                  }
                  return false;
                })}

                {/* Alors ce qu'il se passe ici c'est le Fade joue avec CSS transform et
                on ne peut pas désactiver ça. Soit on change de lib soit on fait avec.
                Faire avec ça veut dire on a le choix entre :
                1/ L'image fade in et out mais est alignée en bas comme maintenant.
                OU
                2/ L'image est centrée dans tous les cas (screenshot que papa a envoyé
                sur whatasapp) mais elle ne fade plus...

                Pour mettre 2/ en place il faut :
                - ajouter 'disabled' dans les param de Fade : <Fade disabled key={i}> etc
                - aller dans slider.css et dans .imageWrap img, commenter bottom0, et
                décommenter les 2 lignes suivantes

                Mon opinion : 2/ est mieux. Il y a déjà un fade quand on arrive sur la page
                et le fade sur les images est chiant car c'est plus long de regarder toutes
                les images. Pas de fade et image bien centrée c'est mieux !
                */}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
