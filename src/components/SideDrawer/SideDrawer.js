import React from 'react';

import './SideDrawer.scss';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
          <li><a href="/">Caracteristicas</a></li>
          <li><a href="/">¿Comó funciona?</a></li>
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
