import React, { Component } from "react";
import Slider from "react-slick";

import './CarouselFeatures.scss';


export default class SlideChangeHooks extends Component {
  state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };
    return (
      <div className="carousel-features">
        <p>Te enseñas algunas de las caracteristicas clave que tiene Poetri.</p>
        <div className="carousel-features__number">
          <span>{this.state.activeSlide + 1}</span>
          <span>{this.state.activeSlide + 1}</span>
        </div>
        <Slider {...settings}>
          <div className="square">
            Paga unicamente el tiempo cuando se ejecuta tu código.
          </div>
          <div className="square">
            Implementa tu codifo en segundos
          </div>
          <div className="square">
            Reduce costos operativos y en infraestructura hasta en un 70%.
          </div>
          <div className="square">
            Implementa tu codifo en segundos
          </div>
          <div className="square">
            Se paga solamente por el tiempo en ejecución. Con Poetri cero costos ocultos.
          </div>
          <div className="square">
            Conecta y amplía los servicios en la nube.
          </div>
        </Slider>
      </div>
    );
  }
}
