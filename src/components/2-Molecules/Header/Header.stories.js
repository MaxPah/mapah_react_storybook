import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import MenuItem from '../../1-Atoms/MenuItem/MenuItem';
import Brand from '../../1-Atoms/Brand/Brand';

storiesOf('Header', module)
  .add('default', () => <header className="header">
    <div className="header--left">
      <Brand title="Maxime PAHUD" />
    </div>
    <div className="header--right">
      <MenuItem title="TestToto1" href="#" />
      <MenuItem title="TestToto1" href="#" classAdd="blue" />
    </div>
  </header>)
;
