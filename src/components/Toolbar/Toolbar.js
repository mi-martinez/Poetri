import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../assets/images/logo-poetri.svg';
import IconSupport from '../../assets/images/support.svg';
import IconRegister from '../../assets/images/enter.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ModalSolicitar from '../ModalSolicitar/ModalSolicitar';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Documentacion from '../Documentacion/Documentacion';
import './Toolbar.scss';

const toolbar = props => (
  <Router>
  <header className="toolbar">
    <nav className="toolbar__navigation">

        <div className="toolbar__logo">
          <a href="/"><img src={Logo} alt="Logo" /></a>
        </div>

        <div className="toolbar_navigation-items">
            <ul>
                <li><AnchorLink offset='80' href='#caracteristicas'>Caracteristicas</AnchorLink></li>
                <li><AnchorLink offset='120' href='#como-funciona'>¿Comó funciona?</AnchorLink></li>
                <li><a href="/">Precios</a></li>
                <li><Link to="/documentacion">Documentación</Link></li>
                <li><a href="/"><img src={IconSupport} alt="Logo" /></a></li>
            </ul>
        </div>
        <div className="toolbar_buttons_nmz">
            <ModalSolicitar />
            <a className="register" href="/">Registrate Gratis</a>
        </div>
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
    </nav>

    <Route exact path="/documentacion/" component={Documentacion} />

  </header>
  </Router>
);

export default toolbar;
