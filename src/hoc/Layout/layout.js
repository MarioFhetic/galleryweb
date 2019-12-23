import React, {Component} from 'react';
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
                <Header
                />
                {/* <HeaderSideNav
                showNav = {this.state.showNav}
                onHideNav = {() => this.toggleSideNav(false)}
                onOpenNav = {() => this.toggleSideNav(true)}
                /> */}
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;