import React, {Component } from "react"
import MediaQuery from "react-responsive";

import Header from "../../components/Header/header";

import HeaderSideNav from "../../components/Header/headerSideNav";

class Layout extends Component {
  state = {
    showNav: false,
  };

  toggleSideNav = (action) => {
    this.setState({
      showNav: action,
    });
    if (this.state.showNav === false)
    {
      document.querySelector("body").style.overflow = "hidden";
    }
    else
    {
      document.querySelector("body").style.overflow = "initial";
    }
    
  };
  
  // si la nav est open on passe setCanScroll à false
  // si elle est fermé setCanScroll to true
  
  //         onAnimationComplete={() => setCanScroll(true)}
  //() => setCanScroll(true)
  
  
  
  render() {
    // const [canScroll, setCanScroll] = useState(false)
  
    // useEffect(() => {
    //   if (canScroll === false) {
    //     document.querySelector("body").classList.add("no-scroll")
    //   } else {
    //     document.querySelector("body").classList.remove("no-scroll")
    //   }
    // }, [canScroll])
    
    
    
    return (
      <div>
        <MediaQuery query="(min-device-width: 1025px)">
          <Header />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1024px)">
          <HeaderSideNav
            showNav={this.state.showNav}
            onHideNav={() => this.toggleSideNav(false)}
            onOpenNav={() => this.toggleSideNav(true)}
          />
        </MediaQuery>

        {this.props.children}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Layout;
