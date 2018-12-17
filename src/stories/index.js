import React from 'react';

import { storiesOf } from '@storybook/react';
import MenuItem from '../components/1-Atoms/MenuItem/MenuItem';
import Brand from '../components/1-Atoms/Brand/Brand';
import  '../App.css';

storiesOf('MenuItem', module)
  .add('Item', () => <MenuItem title="TestToto1" href="#" />)
  .add('Item blue', () => <MenuItem title="TestToto2" href="#" classAdd="blue" />);

storiesOf('Brand', module)
 .add('Brand', () => <Brand title="Maxime PAHUD" />);


storiesOf('Menu', module)
  .add('Item', () => <header class="header">
    <div class="header--left">
      <Brand title="Maxime PAHUD" />
    </div>
    <div class="header--right">
      <MenuItem title="TestToto1" href="#" />
      <MenuItem title="TestToto1" href="#" classAdd="blue" />
    </div>
  </header>);