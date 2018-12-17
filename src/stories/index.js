import React from 'react';

import { storiesOf } from '@storybook/react';
import MenuItem from '../components/1-Atoms/MenuItem/MenuItem';
import Brand from '../components/1-Atoms/Brand/Brand';
import  '../App.css';
import PgfTextImage from '../components/1-Atoms/PgfTextImage/PgfTextImage';
import PgfTextImageCta from '../components/1-Atoms/PgfTextImageCta/PgfTextImageCta';

storiesOf('MenuItem', module)
  .add('Item', () => <MenuItem title="TestToto1" href="#" />)
  .add('Item blue', () => <MenuItem title="TestToto2" href="#" classAdd="blue" />);

storiesOf('Brand', module)
 .add('Brand', () => <Brand title="Maxime PAHUD" />);


storiesOf('Menu', module)
  .add('Item', () => <header class="header">
    <div class="header--left">
      <Brand title="Maxime PAHUD" />
    </div>
    <div class="header--right">
      <MenuItem title="TestToto1" href="#" />
      <MenuItem title="TestToto1" href="#" classAdd="blue" />
    </div>
  </header>);


storiesOf('Pgf - Text image', module)
  .add('PgfTextImage', () => <PgfTextImage text="Lorem ipsum sit dolor amet"
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" />);

storiesOf('Pgf - Text image CTA', module)
  .add('PgfTextImageCta', () => <PgfTextImageCta text="Lorem ipsum sit dolor amet"
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" 
    btnText="Go to MaxPah" 
    btnUrl="http://maximepahud.fr" 
    />);