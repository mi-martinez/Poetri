import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Banner from './components/Banner/Banner';
import SectionLogos from './components/SectionLogos/SectionLogos';
import DiscoverPoetri from './components/DiscoverPoetri/DiscoverPoetri';
import Carousel from './components/CarouselFeatures/CarouselFeatures';
import HowFunction from './components/HowFunction/HowFunction';
import SectionVideos from './components/SectionVideos/SectionVideos';
import FunctionsPoetri from './components/FunctionsPoetri/FunctionsPoetri';
import ChoosePoetri from './components/ChoosePoetri/ChoosePoetri';
import Footer from './components/Footer/Footer';


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
              <div className="row section-done-poetri col-10 m-auto justify-content-center">
                  <h2>¿Qué se puede hacer con Poetri?</h2>
                  <div className="col-lg-6">
                  </div>
                  <div className="col-lg-6 section-done-poetri__gif">
                      GIF o MP4
                      Peticiones con Serveless Todo funciona bien Developer feliz
                  </div>
                  <p>Con Poetri, podras ejecutar código para casi cualquier tipo de aplicación o servicio back-end sin tener que realizar tareas de administración. Es facil, cargas tu código y Poetri se encarga de todo lo necesario para ejecutar y escalar el código.</p>
              </div>
        </div>
        <div className="row-content-how-function">
          <HowFunction/>
        </div>
        <SectionVideos/>
        <FunctionsPoetri />
        <div className="container">
          <ChoosePoetri />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
