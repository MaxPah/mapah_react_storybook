import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import PgfSlider from '../PgfSlider/PgfSlider';


storiesOf('Paragraphs/Slider', module)
  .add('default', () => <PgfSlider
    title="Lorem ipsum sit dolor amet"
    slides={[
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      "https://www.oceaniahotels.com/media/cache/slider_base/uploads/portfolio/53fefeea79bf8_R%C3%A9gion-Bretagne.jpg"
    ]}
  />)
;
