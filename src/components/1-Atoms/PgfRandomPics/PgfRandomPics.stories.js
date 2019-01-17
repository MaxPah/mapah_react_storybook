import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import PgfRandomPics from '../PgfRandomPics/PgfRandomPics';

storiesOf('Paragraphs', module)
  .add('RandomPics', () => <PgfRandomPics
    pics={[
      "https://via.placeholder.com/60?text=1",
      "https://via.placeholder.com/60?text=2",
      "https://via.placeholder.com/60?text=3",
      "https://via.placeholder.com/60?text=4",
      "https://via.placeholder.com/60?text=1",
      "https://via.placeholder.com/60?text=2",
      "https://via.placeholder.com/60?text=3",
      "https://via.placeholder.com/60?text=4",
      "https://via.placeholder.com/60?text=1",
      "https://via.placeholder.com/60?text=2",
      "https://via.placeholder.com/60?text=3",
      "https://via.placeholder.com/60?text=4",
      "https://via.placeholder.com/60?text=1",
      "https://via.placeholder.com/60?text=2",
      "https://via.placeholder.com/60?text=3",
      "https://via.placeholder.com/60?text=4",
    ]}
    />
  )
  .add('RandomPics2', () => <PgfRandomPics
    pics={[
      "https://via.placeholder.com/60?text=1",
      "https://via.placeholder.com/60?text=2",
      "https://via.placeholder.com/60?text=3",
      "https://via.placeholder.com/60?text=4",
      "https://via.placeholder.com/60?text=5",
      "https://via.placeholder.com/60?text=6",
    ]}
  />
  )
;
