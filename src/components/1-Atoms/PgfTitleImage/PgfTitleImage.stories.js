import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import PgfTitleImage from '../PgfTitleImage/PgfTitleImage';


storiesOf('Paragraphs/Title Image', module)
  .add('default', () => <PgfTitleImage text="Lorem ipsum sit dolor amet"
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" 
  />)
;