import React from 'react';

import Image from './Image';
import classes from './Avatar.module.css';

const avatar = props => (
  <div
    className={ classes.avatar }
    style={{ width: props.size + 'rem', height: props.size + 'rem' }}
  >
    <Image imageUrl={props.image} />
  </div>
);

export default avatar;
