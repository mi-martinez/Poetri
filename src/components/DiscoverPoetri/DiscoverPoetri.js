import React from 'react';

import './DiscoverPoetri.scss';

const discoverPoetri = props => (
      <div className="section-discover-poetri" id="caracteristicas">
        <div className="row justify-content-center before--rotate">
          <h2>Descubre Poetri</h2>
          <p className="col-lg-10 p-mas">Serverless significa, literalmente, <strong>sin servidor</strong>, es allí donde Poetri pone a disposición todas sus caracteristicas y beneficios a la hora de implementar su código en la nube, sin altos costos de infraestructura, ni desarrolladores.</p>
          <div className="col-lg-11 row-table--margin">
            <h3><span></span>Beneficios</h3>
            <div className="benefits-table">
              <div className="benefits-table__cell">
                <div className="square">
                 No más servidores y configuraciones1
                </div>
                <div className="square">
                 Reduce costos operativos y en infraestructura hasta en un 70%.
                </div>
                <div className="square">
                 Ya no se tiene que preocupar por mantener los servidores donde corre su código.
                </div>
              </div>
              <div className="benefits-table__cell">
                <div className="square">
                 Adiós a instalar software, abrir o cerrar puertos, correr actualizaciones, ssh, etc.
                </div>
                <div className="square">
                 Es horizontalmente escalable, no tiene que preocuparse por clusters, balanceo de cargas, etc.
                </div>
              </div>
              <div className="benefits-table__cell">
                <div className="square">
                 Se paga solamente por el tiempo en ejecución. Con Poetri cero costos ocultos.
                </div>
                <div className="square">
                 Los desarrollos complejos se convierten simples.
                </div>
              </div>
              <div className="benefits-table__cell">
                <div className="square">
                 Conecta y amplía los servicios en la nube.
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

);

export default discoverPoetri;
