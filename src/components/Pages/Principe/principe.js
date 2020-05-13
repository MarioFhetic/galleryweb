import React from 'react';
import styles from './principe.css'

import LogoPrincipe from '../Logos/logoPrincipe';

import Fade from 'react-reveal/Fade';
import PrincipeHeader from './principeHeader'
import PrincipeBottom from './principeBottom'


const Principe = () =>
    (
            <div className = {styles.bigContainer}>
                <LogoPrincipe/>
                <PrincipeHeader/>
                <PrincipeBottom/>

            </div>

    )

export default Principe