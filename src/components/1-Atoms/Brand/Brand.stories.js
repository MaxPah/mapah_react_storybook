import React from 'react';

import { storiesOf } from '@storybook/react';
import MenuItem from '../MenuItem/MenuItem';
import Brand from '../Brand/Brand';
import  '../../../index.css';
import  '../../../App.css';
import PgfTextImage from '../PgfTextImage/PgfTextImage';
import PgfTextImageCta from '../PgfTextImageCta/PgfTextImageCta';
import PgfTitleImage from '../PgfTitleImage/PgfTitleImage';
import PgfTitleImageCta from '../PgfTitleImageCta/PgfTitleImageCta';
import PgfSlider from '../PgfSlider/PgfSlider';
import PgfRandomPics from '../PgfRandomPics/PgfRandomPics';

storiesOf('Header', module)
  .add('Item', () => <header className="header">
    <div className="header--left">
      <Brand title="Maxime PAHUD" />
    </div>
    <div className="header--right">
      <MenuItem title="TestToto1" href="#" />
      <MenuItem title="TestToto1" href="#" classAdd="blue" />
    </div>
  </header>);


storiesOf('Header.MenuItem', module)
  .add('Item', () => <MenuItem title="TestToto1" href="#" />)
  .add('Item blue', () => <MenuItem title="TestToto2" href="#" classAdd="blue" />);

storiesOf('Header.Brand', module)
  .add('Brand', () => <Brand title="Maxime PAHUD" />);



storiesOf('Paragraphs', module)
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
  )
  .add('RandomPics', () => <PgfRandomPics
    pics={[
      "https://via.placeholder.com/50?text=1",
      "https://via.placeholder.com/50?text=2",
      "https://via.placeholder.com/50?text=3",
      "https://via.placeholder.com/50?text=4",
      "https://via.placeholder.com/50?text=5",
      "https://via.placeholder.com/50?text=6",
      "https://via.placeholder.com/50?text=7",
      "https://via.placeholder.com/50?text=8",
      "https://via.placeholder.com/50?text=9",
    ]}
    />
  );


storiesOf('5 - Footer', module)
  .add('Footer', () => <div title="Maxime PAHUD" />);