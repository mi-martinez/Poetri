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
import ImgGif from './assets/images/poetri-dev.png';
import ImgGif2 from './assets/images/create.png';
import ImgGif3 from './assets/images/consume.png';


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
              <div className="row section-done-poetri col-10 justify-content-center">
                  <h2>¿Qué se puede hacer con Poetri?</h2>
                  <div className="col-lg-4 section-done-poetri-img">
                    <div className="img-g"><img src={ImgGif}/> </div>
                    <p className="img-p">Poetri crea tu función.</p>
                  </div>
                  <div className="col-lg-4 section-done-poetri-img">
                     <div className="img-g"> <img src={ImgGif2}/> </div>
                     <p className="img-p">Crea tus propias funciones.</p>
                  </div>
                  <div className="col-lg-4 section-done-poetri-img">
                     <div className="img-g"> <img src={ImgGif3}/> </div>
                     <p className="img-p">Consume funciones.</p>
                  </div>
                  <p className="p-st">Con Poetri, podras ejecutar código para casi cualquier tipo de aplicación o servicio back-end sin tener que realizar tareas de administración. Es facil, cargas tu código y Poetri se encarga de todo lo necesario para ejecutar y escalar el código.</p>
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
