import React from 'react';

import './SectionLogos.scss';

import LogoMailpanda from '../../assets/images/mailpanda.png';
import Komercia from '../../assets/images/komercia.png';
import Liftit from '../../assets/images/liftit.png';
import Epayco from '../../assets/images/epayco.png';
import Mazda from '../../assets/images/mazda.png';
import Samsara from '../../assets/images/samsara.png'

const sectionLogos = props => (
    <div className="section-logos">
        <p>No pierdas tiempo configurando tu infraestructura. Sólo carga tu código.</p>
        <div className="row section-logos__enterprise m-0">
            <img src={Epayco} alt="logo-epayco" />
            <img src={Komercia} alt="logo-komercia" />
            <img src={Liftit} alt="logo-liftit" />
            <img src={LogoMailpanda} alt="logo-mailpanda" />
            <img src={Mazda} alt="logo-mazda" />
            <img src={Samsara} alt="logo-samsara" />
        </div>
        <div className="section-logos__txt">
            <span>+ de 200 empresas confian en Poetri</span>
        </div>
    </div>
);

export default sectionLogos;
