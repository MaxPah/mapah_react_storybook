import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import PgfTitleImageCta from '../PgfTitleImageCta/PgfTitleImageCta';

storiesOf('Paragraphs/Title Image Cta', module)
  .add('default', () => <PgfTitleImageCta text="Lorem ipsum sit dolor amet"
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" 
    btnText="Go to MaxPah" 
    btnUrl="http://maximepahud.fr" 
  />)
;
