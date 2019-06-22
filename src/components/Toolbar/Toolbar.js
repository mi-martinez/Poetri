import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../assets/images/logo-poetri.svg';
import IconSupport from '../../assets/images/support.svg';
import IconRegister from '../../assets/images/enter.svg';

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
                <li><a href="/">Caracteristicas</a></li>
                <li><a href="/">¿Comó funciona?</a></li>
                <li><a href="/">Precios</a></li>
                <li><Link to="/documentacion">Documentación</Link></li>
                <li><a href="/"><img src={IconSupport} alt="Logo" /></a></li>
            </ul>
        </div>
        <div className="toolbar_buttons_nmz">
            <a className="asesoria" href="/">Solicitar Asesoria</a>
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
