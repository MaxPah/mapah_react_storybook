import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';

import JmlHeader from '../JmlHeader/JmlHeader';

storiesOf('Paragraphs', module)
  .add('JmlHeader', () => <JmlHeader
    links={[
      {
        url: 'http://google.fr',
        title: 'google.fr',
      },
      {
        url: 'http://TEXT1.fr',
        title: 'TEXT1.fr',
      },
      {
        url: 'http://TEXT2.fr',
        title: 'TEXT2.fr',
      },
      {
        url: 'http://TEXT3.fr',
        title: 'TEXT3.fr',
      },
      {
        url: 'http://TEXT4.fr',
        title: 'TEXT4.fr',
      },
      {
        url: 'http://TEXT5.fr',
        title: 'TEXT5.fr',
      },
    ]}
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
  />)
;
