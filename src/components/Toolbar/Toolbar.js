import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../assets/images/logo-poetri.svg';
import IconSupport from '../../assets/images/support.svg';
import IconRegister from '../../assets/images/enter.svg';

import './Toolbar.scss';

const toolbar = props => (
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
                <li><a href="/">Documentación</a></li>
                <li><a href="/"><img src={IconSupport} alt="Logo" /></a></li>
            </ul>
        </div>
        <div className="toolbar_buttons">
            <a href="/">Solicitar Asesoria</a>
            <a href="/">Registrate Gratis</a>
        </div>
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
    </nav>
  </header>
);

export default toolbar;
