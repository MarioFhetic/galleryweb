import React, {Component} from 'react'
import styles from './gallery.css'
import {firebaseLooper, firebaseDB} from '../../firebase'

import Slider from '../widgets/GallerySlider/slider.js'
import GallerySlider from '../widgets/GallerySlider/GallerySlider'

import { sequenceExpression } from '@babel/types'

class Gallery extends Component
{

    state = {
        gallery: [],
        serie: '',
        link: ''
    }
    
    componentWillMount()
    {
        // on recupère le nom de l'album
        let name = this.props.match.params.name;
        // On call firebase pour récuperer les data correspondantes à cet album
        firebaseDB.ref(`albums/${name}`).once('value')
        .then((snapshot) =>
        {
            let album = snapshot.val() 
            album && this.setState({
                gallery: album.gallery, 
                serie: album.serie,
                link: album.link
            })
        })

    }

    render(){
        let serie = this.state.serie;
        let link = this.state.link;
        let gallery = this.state.gallery

        return(
            <div className={styles.outerGallery}>
                {gallery && <GallerySlider serie={serie} link={link} gallery={gallery} />}
            </div>
        )
    }
}

export default Gallery;