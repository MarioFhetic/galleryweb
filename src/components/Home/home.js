import React from 'react';

import Logo_Header from './LogoHeader/logoHeader';
import MiddleBar from './MiddleBar/middleBar';
import CardList from '../../components/widgets/CardList/cardList';
import Footer from '../Footer/footer';


const Home = () =>
{
        return(
            <div>
                <Logo_Header/>
                <MiddleBar/>
                <CardList
                type = "card"
                />
                <Footer/>
            </div>

        )
}

export default Home; 