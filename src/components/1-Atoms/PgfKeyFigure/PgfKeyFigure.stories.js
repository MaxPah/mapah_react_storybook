import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';
import PgfKeyFigure from '../PgfKeyFigure/PgfKeyFigure';

storiesOf('Paragraphs', module).add('Key Figure', () =>
  <div>
    <PgfKeyFigure
      title="Lorem ipsum sit dolor amet"
      description="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
    />
    <PgfKeyFigure
      title="Lorem ipsum sit dolor amet"
      description="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
    />
  </div>
);