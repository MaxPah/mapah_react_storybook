import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import MenuItem from '../MenuItem/MenuItem';

storiesOf('Header/MenuItem', module)
  .add('Item', () => <MenuItem title="TestToto1" href="#" />)
  .add('Item blue', () => <MenuItem title="TestToto2" href="#" classAdd="blue" />)
;