import React from 'react';

import Logo from '../../assets/images/logo-footer.svg';
import GitHub from '../../assets/images/logo-git-hub.svg';
import Facebook from '../../assets/images/icon_facebook.svg';
import Linkedin from '../../assets/images/icon_linkedIn.svg';
import Twitter from '../../assets/images/icon_twitter.svg';
import './Footer.scss';

const footer = props => (

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 text-center">
            <img src={Logo} />
          </div>
          <div className="col-lg-2">
            <h2>Empresa</h2>
            <a href=""> Acerca de Poetri </a>
            <a href=""> Comunidad Poetri </a>
            <a href=""> Blog </a>
          </div>
          <div className="col-lg-2">
            <h2>Servicios </h2>
            <a href="">Poetri para empresas</a>
            <a href="">Poetri para desarrolladores</a>
            <a href="">Poetri desde cero</a>
            <a href="">Funciones</a>
            <a href="">Precio</a>
          </div>
          <div className="col-lg-2">
            <h2>Legal</h2>
            <a href="">Terminos y condiciones</a>
            <a href="">Tratamiento de datos </a>
            <a href="">Politicad de privacidad </a>
          </div>
          <div className="col-lg-2">
            <h2>Soporte</h2>
            <a href="">Soporte para desarrolladores</a>
            <a href="">Asesoria personalizada</a>
            <a href="">Soporte para empresas</a>
            <a href="">Preguntas frecuentes</a>
            <a href="">Documentación</a>
          </div>
          <div className="col-lg-2 icon-redes">
            <img src={GitHub} />
            <img src={Facebook} />
            <img src={Linkedin} />
            <img src={Twitter} />
          </div>
        </div>
      </div>
    </footer>
);

export default footer;
