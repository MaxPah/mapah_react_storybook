import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import PgfTextImage from '../PgfTextImage/PgfTextImage';

storiesOf('Paragraphs/Text Image', module)
  .add('double', () => <div>
    <PgfTextImage 
      title="Lorem ipsum sit dolor amet"
      text="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
      image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
    />
    <hr />
    <PgfTextImage 
      title="Lorem ipsum sit dolor amet"
      inverted="inverted"
      text="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
      image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
    />
  </div>)
  .add('simple', () => <PgfTextImage 
    title="Lorem ipsum sit dolor amet"
    text="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
  />)
;