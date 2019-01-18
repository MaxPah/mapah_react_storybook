import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import Brand from '../Brand/Brand';

storiesOf('Header/Brand', module)
  .add('Brand', () => <Brand title="Maxime PAHUD" />);