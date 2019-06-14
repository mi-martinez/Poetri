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
      className: "slider variable-width",
      dots: true,
      centerMode: true,
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
            Solo pagas cuando se ejecuta tu código
          </div>
          <div className="square">
            Implementa tu codigo en segundos.
          </div>
          <div className="square">
            No requiere configuraciones adicionales
          </div>
          <div className="square">
            Soporta varios lenguajes
          </div>
          <div className="square">
            Rentabiliza funciones
          </div>
          <div className="square">
            Escalar automaticamente
          </div>
          <div className="square">
            Reutilizacion de codigo
            “entrega continua de codigo”
          </div>
          <div className="square">
            Seguridad ... Los datos viajan protegídos de extremos a extremos.
          </div>
        </Slider>
      </div>
    );
  }
}
