import React, { Component } from 'react';
import './Banner.scss';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ModalSolicitar from '../ModalSolicitar/ModalSolicitar';

export default class ChangeSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "banner-home",
      content: "Alcanza metas facilmente sin perder tiempo en infraestructura y sin perder de vista tu obejtivo real",
    };
  }

  cambiarClass = ()=>{
    this.setState({class: "banner-home2", content:"Alcanza metas facilmente sin perder tiempo en infraestructura y sin perder de vista tu obejtivo real2" })

  }
  cambiarClass2 = ()=>{
    this.setState({class: "banner-home", content:"Alcanza metas facilmente sin perder tiempo en infraestructura y sin perder de vista tu obejtivo real"})
  }


  render(){
    return (
      <div className={this.state.class} id="banner">
        <div className="container">
          <div className="col-lg-5 col-12 banner-home__title">
            <h1>Crea<span>mos</span></h1>
            <h1>Desarrolla<span>mos</span></h1>
            <h1 className="last">Funciones</h1>
            <p> sin Servidor </p>
          </div>
          <div className="col-lg-5 col-12 banner-home__descrip">
            <p>{this.state.content}</p>
            <p>Ahorra tiempo y dinero con Poetri</p>
          </div>
          <div className="col-lg-5 col-12 banner-home__buttons">
          <Tabs defaultIndex = {1}>
            <TabList>
              <Tab onClick={this.cambiarClass}>Soy desarrollador</Tab>
              <Tab onClick={this.cambiarClass2}>Soy Empresa</Tab>
            </TabList>
            <TabPanel>
              <a>Probar Ahora</a>
            </TabPanel>
            <TabPanel>
              <ModalSolicitar />
            </TabPanel>
          </Tabs>

          </div>
        </div>
      </div>
    )
  }
}
