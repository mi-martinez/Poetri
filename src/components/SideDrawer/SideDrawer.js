import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './SideDrawer.scss';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
          <li><AnchorLink offset='80' href='#caracteristicas'>Caracteristicas</AnchorLink></li>
          <li><AnchorLink offset='120' href='#como-funciona'>¿Comó funciona?</AnchorLink></li>
          <li><a href="/">Precios</a></li>
          <li><a href="/">Documentación</a></li>
      </ul>
      <div className="toolbar_buttons-drawer">
          <a href="/">Solicitar Asesoria</a>
          <a href="/">Registrate Gratis</a>
      </div>
    </nav>

  );
};

export default sideDrawer;
