import React from 'react';

import './Backdrop.scss';

const backdrop = props => (
    <div className="backdrop">
      <div className="" onClick={props.click}>
      X
      </div>
    </div>

);

export default backdrop;
