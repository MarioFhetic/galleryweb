import React, {Component} from 'react'
import styles from './gallery.css'
import {firebaseLooper, firebaseDB} from '../../firebase'
import {Link} from 'react-router-dom';

import GallerySlider from '../widgets/GallerySlider/GallerySlider';
import Fade from 'react-reveal/Fade';
// import '../widgets/GallerySlider/slick-theme.css';
import {ReactComponent as ReturnHomeArrow} from './flechehome.svg'




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
        console.log(name)
        // On call firebase pour récuperer les data correspondantes à cet album
        firebaseDB.ref(`albums/${name}`).once('value')
        .then((snapshot) =>
        {
            let album = snapshot.val()
            // On écrit l'album dans le state
            album && this.setState({
                gallery: album.gallery,
                serie: album.serie,
                link: album.link
            })
        })

    }

    render(){
        // Recup data
        let serie = this.state.serie;
        let link = this.state.link;
        let gallery = this.state.gallery

        return(
        <Fade
            delay = {500}
            duration = {1500}
            big>
            <div className={styles.outerGallery}>
                <Link to = "/">
                    <ReturnHomeArrow className = {styles.returnHomeArrow}/>
                </Link>

                {
                gallery &&

                    <GallerySlider serie={serie} link={link} gallery={gallery} />
                }
            </div>
        </Fade>
        )
    }
}

export default Gallery;
