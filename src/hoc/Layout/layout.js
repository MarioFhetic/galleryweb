import React, {Component} from 'react';
import MediaQuery from "react-responsive";
 

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import HeaderSideNav from '../../components/Header/headerSideNav';



class Layout extends Component
{
    state = {
        showNav: false,
    }

    toggleSideNav = (action) =>
    {
        this.setState({
            showNav: action
        })
    }

    render()
    {
        return(
            <div>
                <MediaQuery query="(min-device-width: 1024px)">
                    <Header/>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1024px)">
                 <HeaderSideNav
                showNav = {this.state.showNav}
                onHideNav = {() => this.toggleSideNav(false)}
                onOpenNav = {() => this.toggleSideNav(true)}
                />
                </MediaQuery>

                

                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;