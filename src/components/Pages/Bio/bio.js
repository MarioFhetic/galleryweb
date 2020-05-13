import React from 'react';
import styles from './bio.css'

import LogoBio from '../Logos/logoBio';

import BioHeader from './bioHeader';
import BioTop from './bioTop'
import BioMain from './bioMain'
import BioFooter from './bioFooter'
import BioHalfEnd from './bioHalfEnd'
import BioEnd from './bioEnd';






const Bio = () =>
{
    return(
            <div className = {styles.bigContainer}>
                <LogoBio/>
                <BioHeader/>
                <BioTop/>
                <BioMain/>
                <BioFooter/>
                <BioHalfEnd/>
                <BioEnd/>
            </div>
    )
}


export default Bio