import React, { Component } from "react";
import Slider from "react-slick";

import PlayButton from '../../assets/images/play-button.svg';
import LogoLiftit from '../../assets/images/logo-liftit-x62.png';
import Lenguajes from '../../assets/images/lenguajes.png';

import './SectionVideos.scss';


export default class BackgroundSlide extends Component {

  render() {
    const settings = {
      dots: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slide-background">
        <div className="slide-background__infostatic">
          <div className="slide-background__infostatic-content">
            <h2>¿Qué sucede cuando se usa Poetri?</h2>
            <p>Las empresas dejan de preocuparse por la infraestructura, por la tecnologia, y generan mayor valor a sus clientes.</p>
            <p>Poetri soporta los principales lenguajes de programación (Poetri Poliglota).</p>
          </div>
          <img src={Lenguajes} />
        </div>
        <Slider {...settings}>
          <div className="slide-background__content bg-slide1">
            <div className="slide-background__content-container">
              <div className="content-box">
                <figure>
                  <img src={PlayButton} />
                </figure>
                 <h5>Diego Campo</h5>
                 <div>
                    <span><img src={LogoLiftit}/></span>
                    <p>Country</p>
                    <p>Manager Colombia </p>
                 </div>
              </div>
            </div>
          </div>
          <div className="slide-background__content bg-slide2">
            Segundo Slide
          </div>
        </Slider>
      </div>
    );
  }
}
