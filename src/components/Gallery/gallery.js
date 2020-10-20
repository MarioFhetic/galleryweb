import React, {Component} from 'react'
import styles from './gallery.css'
import {firebaseDB} from '../../firebase'
import {Link} from 'react-router-dom';

import GallerySlider from '../widgets/GallerySlider/GallerySlider';
import {ReactComponent as ReturnHomeArrow} from './flechehome.svg'

import { AnimatePresence, motion } from "framer-motion";



class Gallery extends Component
{

    state = {
        gallery: [],
        serie: '',
        link: ''
    }

    UNSAFE_componentWillMount()
    {
        // on recupère le nom de l'album
        let name = this.props.match.params.name;
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
            // delay 500
            // duration 1500
            <AnimatePresence>
                <motion.div
                transition={{
                    delay: 1,
                    duration: 1,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                    <div className={styles.outerGallery}>
                        <Link to = "/">
                            <div className = {styles.containerHomeArrow}>
                                <ReturnHomeArrow className = {styles.returnHomeArrow}/>
                            </div>
                        </Link>

                        {
                        gallery &&

                            <GallerySlider serie={serie} link={link} gallery={gallery} />
                        }
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }
}

export default Gallery;
