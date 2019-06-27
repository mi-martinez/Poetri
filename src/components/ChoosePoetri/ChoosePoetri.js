import React from 'react';

import './ChoosePoetri.scss';

import LogoPoetrix82 from '../../assets/images/logo-poetrix82.svg';
import Logo1 from '../../assets/images/logo-1.svg';
import Logo2 from '../../assets/images/logo-2-1.svg';
import Logo3 from '../../assets/images/logo-3.svg';
import Logo4 from '../../assets/images/logo-4.svg';
import LogoZeit from '../../assets/images/zeit-black-full-logo.svg';
import Tick from '../../assets/images/tick-inside-circle.svg';
import Equis from '../../assets/images/equis.svg';


const choosePoetri = props => (
      <div className="section-choose-poetri">
        <h2>¿Por qué escoger Poetri?</h2>
        <p>Poetri, ofrece soluciones más alla de las que ofrecen otras empresas enfocadas en Faas, Servelees, en esta comparación queremos enseñarte nuestro valor agregado como empresa.</p>
        <div className="scrolleable-table">
        <div className="section-choose-poetri__table">
            <div className="section-choose-poetri__table-logos">
                <figure className="pos-relative"><img src={LogoPoetrix82} /></figure>
                <figure><img src={Logo1} /></figure>
                <figure><img src={Logo2} /></figure>
                <figure><img src={Logo3} /></figure>
                <figure><img src={Logo4} /></figure>
                <figure><img src={LogoZeit} /></figure>
            </div>
            <div className="section-choose-poetri__table-row">
              <p>Desarrollo de funciones personalizads para empresas</p>
              <figure className="pos-relative"><img src={Tick} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
            </div>
            <div className="section-choose-poetri__table-row">
              <p>Desarrollo de funciones para empresas</p>
              <figure className="pos-relative"><img src={Tick} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
            </div>
            <div className="section-choose-poetri__table-row">
              <p>Soporte personalizado</p>
              <figure className="pos-relative"><img src={Tick} /></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
            </div>
            <div className="section-choose-poetri__table-row">
              <p>Precio unicamente por tiempos de ejecuciòn (Sin costos ocultos)</p>
              <figure className="pos-relative"><img src={Tick} /></figure>
              <figure></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Equis} /></figure>
            </div>
            <div className="section-choose-poetri__table-row">
              <p>Tamaño máximo de los archivos</p>
              <figure className="pos-relative"><img src={Tick} /></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
            </div>
            <div className="section-choose-poetri__table-row">
              <p>Usa facilmente CLI</p>
              <figure className="pos-relative"><img src={Tick} /></figure>
              <figure><img src={Equis} /></figure>
              <figure><img src={Tick} /></figure>
              <figure><img src={Tick} /></figure>
              <figure><img src={Tick} /></figure>
              <figure><img src={Tick} /></figure>
            </div>
            <div className="section-choose-poetri__table-row">
              <p>Uso de cualquier lenguaje de programación</p>
              <figure className="pos-relative"><img src={Tick} /></figure>
              <figure></figure>
              <figure></figure>
              <figure><img src={Tick} /></figure>
              <figure></figure>
              <figure><img src={Tick} /></figure>
            </div>
        </div>
        </div>
        <div className="box-info">
          Con Poetri pagas unicamente tiempos de ejecución, sin costos ocultos como ancho de banda, actualizaciones, equipos de trabajo
        </div>
        <a href="/" className="cta-start">Comienza Ahora</a>

      </div>
);

export default choosePoetri;
