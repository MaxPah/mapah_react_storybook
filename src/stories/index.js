import React from 'react';

import { storiesOf } from '@storybook/react';
import MenuItem from '../components/1-Atoms/MenuItem/MenuItem';
import Brand from '../components/1-Atoms/Brand/Brand';
import  '../App.css';
import PgfTextImage from '../components/1-Atoms/PgfTextImage/PgfTextImage';
import PgfTextImageCta from '../components/1-Atoms/PgfTextImageCta/PgfTextImageCta';
import PgfTitleImage from '../components/1-Atoms/PgfTitleImage/PgfTitleImage';
import PgfTitleImageCta from '../components/1-Atoms/PgfTitleImageCta/PgfTitleImageCta';
import PgfSlider from '../components/1-Atoms/PgfSlider/PgfSlider';

storiesOf('1 - Header', module)
  .add('Item', () => <header class="header">
    <div class="header--left">
      <Brand title="Maxime PAHUD" />
    </div>
    <div class="header--right">
      <MenuItem title="TestToto1" href="#" />
      <MenuItem title="TestToto1" href="#" classAdd="blue" />
    </div>
  </header>);


storiesOf('2 - MenuItem', module)
  .add('Item', () => <MenuItem title="TestToto1" href="#" />)
  .add('Item blue', () => <MenuItem title="TestToto2" href="#" classAdd="blue" />);

storiesOf('3 - Brand', module)
  .add('Brand', () => <Brand title="Maxime PAHUD" />);



storiesOf('4 - Paragraphs', module)
  .add('Text Image', () => 
      <div>
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
      </div>
  )
  .add('Text Image Cta', () =>
   <div>
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
     </div>
  )
  .add('Title Image', () => <PgfTitleImage text="Lorem ipsum sit dolor amet"
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" />
  )
  .add('Title Image Cta', () => <PgfTitleImageCta text="Lorem ipsum sit dolor amet"
    image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" 
    btnText="Go to MaxPah" 
    btnUrl="http://maximepahud.fr" 
    />
  )
  .add('Slider', () => <PgfSlider
    title="Lorem ipsum sit dolor amet"
    slides={[
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      "https://www.oceaniahotels.com/media/cache/slider_base/uploads/portfolio/53fefeea79bf8_R%C3%A9gion-Bretagne.jpg"
    ]}
    />
  );


storiesOf('5 - Footer', module)
  .add('Footer', () => <div title="Maxime PAHUD" />);