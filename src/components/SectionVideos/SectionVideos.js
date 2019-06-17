import React, { Component } from "react";
import Slider from "react-slick";

import PlayButton from '../../assets/images/play-button.svg';
import LogoLiftit from '../../assets/images/logo-liftit-x62.png';

import './SectionVideos.scss';


export default class BackgroundSlide extends Component {

  render() {
    const settings = {
      dots: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slide-background">

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
          <div className="slide-background__content9">
            Solo pagas cuando se ejecuta tu código
          </div>
        </Slider>
      </div>
    );
  }
}
