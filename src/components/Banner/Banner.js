import React from 'react';

import './Banner.scss';
import ImgLeft from '../../assets/images/solicitar-asesoria-banner.jpg';

const banner = props => (
    <div className="banner-home">
        <div className="banner-home__left">
          <a href="/">Solicitar Asesoria</a>
        </div>
        <div className="banner-home__right">
          <a href="/">Registrate Gratis</a>
        </div>
    </div>
);

export default banner;
