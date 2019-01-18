import React from 'react';

import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

import PgfTextImageCta from '../PgfTextImageCta/PgfTextImageCta';

storiesOf('Paragraphs/PgfTextImageCta', module)
  .add('default', () => <PgfTextImageCta
    title="Lorem ipsum sit dolor amet"
    text="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
    btnText="Go to MaxPah"
    btnUrl="http://maximepahud.fr"
  />)
  .add('double', () => <div>
    <PgfTextImageCta
      title="Lorem ipsum sit dolor amet"
      text="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
      image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
      btnText="Go to MaxPah"
      btnUrl="http://maximepahud.fr"
    />
    <hr />
    <PgfTextImageCta
      title="Lorem ipsum sit dolor amet"
      text="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
      image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
      btnText="Go to MaxPah"
      btnUrl="http://maximepahud.fr"
      inverted="inverted"
    />
  </div>)
;