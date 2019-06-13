import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Banner from './components/Banner/Banner';
import SectionLogos from './components/SectionLogos/SectionLogos';
import DiscoverPoetri from './components/DiscoverPoetri/DiscoverPoetri';
import Carousel from './components/CarouselFeatures/CarouselFeatures';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Banner />
        <SectionLogos />
        <div className="container">
          <DiscoverPoetri />
          <div className="section-carousel-features">
            <h3><span></span>Caracteristicas</h3>
            <Carousel />
          </div>
        </div>
        <div style={{height: '700px'}}></div>
      </div>
    );
  }
}

export default App;
