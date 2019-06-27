import React, { Component } from "react" ;
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.scss";
import ModalSolicitar from '../ModalSolicitar/ModalSolicitar';

import Energy from '../../assets/images/energy.svg';
import Logo2 from '../../assets/images/logo-2.svg';

import './FunctionsPoetri.scss'

class FunctionsPoetri extends React.Component{
  render(){
    return(
      <Tabs>
        <div className="row section-functions-poetri col-12 p-0">
          <div className="col-lg-5 col-12">
              <div className="contenedor-ficti">
              <h2>Probemos algunas funciones Poetri</h2>
              <p>Poetri le permite crear y desplegar servicios al nivel de una sola función, unidades independientes de funcionalidad enfocadas en hacer una cosa bien.</p>
              <TabList>
                <Tab>
                  <div className="react-tabs__tab--name-function">
                    <p>Normalizador de Direcciones y Geolocalización</p>
                    <span><img src={Energy} />397.326</span>
                  </div>
                </Tab>
                <Tab className="react-tabs__tab last">
                  <div className="react-tabs__tab--name-function">
                    <p>Convertir Coordenadas a Direcciones</p>
                    <span><img src={Energy} />428.881</span>
                  </div>
                </Tab>
              </TabList>
              <div className="view-functions">
                  <span>Ver + Funciones</span>
              </div>
              <div className="cta-asesoria">
                  <p>¿Quieres que Poetri desarrolle una función para tu empresa?</p>
                  <ModalSolicitar />
              </div>
              </div>
          </div>
          <div className="col-lg-7 col-12 p-0">
          <TabPanel>
            <img src={Logo2} />
            <div className="react-tabs__tab-panel--content">
             <span>Ahora prueba esta función</span>
             <input type="text" placeholder="Ejemplo: Calle 69b sur No 3-87" />
             <p>Ahorre tiempo y dinero en el desarrollo de funciones. paga unicamente las ejecuciones que consumes.</p>
             <div></div>
            </div>
          </TabPanel>
          <TabPanel>
            <img src={Logo2} />
            <div className="react-tabs__tab-panel--content">
             <span>Ahora prueba esta segunda función</span>
             <input type="text" placeholder="Ejemplo: Calle 69b sur No 3-87" />
             <p>Ahorre tiempo y dinero en el desarrollo de funciones. paga unicamente las ejecuciones que consumes.</p>
             <div></div>
            </div>
          </TabPanel>
          </div>
        </div>
      </Tabs>

    )
  }
}
export default FunctionsPoetri
