import React from 'react';

// Default.
import { storiesOf } from '@storybook/react';
import  '../../../index.css';
import  '../../../App.css';

// Components.
import MenuItem from '../../1-Atoms/MenuItem/MenuItem';
import Brand from '../../1-Atoms/Brand/Brand';
import JmlHeader from '../../1-Atoms/JmlHeader/JmlHeader';
import PgfKeyFigure from '../../1-Atoms/PgfKeyFigure/PgfKeyFigure';
import Header from '../../2-Molecules/Header/Header';
import Footer from '../../2-Molecules/Footer/Footer';

// Assets.
import img from '../../1-Atoms/test.jpg';
import img2 from '../../1-Atoms/test2.jpg';
import PgfTextImage from '../../1-Atoms/PgfTextImage/PgfTextImage';

storiesOf('3-Organisms', module)
  .add('homepage', () => <div>
    <Header className="header">
      <div className="header--left">
        <Brand title="JML Architecte" />
      </div>
      <div className="header--right">
        <MenuItem title="Aménagements" href="#" />
        <MenuItem title="Equipements & Bureaux" href="#" />
        <MenuItem title="Regards de voyage" href="#" />
        <MenuItem title="Logements" href="#" />
        <MenuItem title="Réhabilitations" href="#" />
        <MenuItem title="Scolaire" href="#" />
        <MenuItem title="Me contacter" href="#" classAdd="blue" />
      </div>
    </Header>
    <div className="main">
      <div className="lame">
        <JmlHeader
          links={[
            {
              url: 'http://google.fr',
              title: 'Aménagements',
            },
            {
              url: 'http://TEXT1.fr',
              title: 'Equipements & Bureaux',
            },
            {
              url: 'http://TEXT2.fr',
              title: 'Regards de voyage',
            },
            {
              url: 'http://TEXT3.fr',
              title: 'Logements',
            },
            {
              url: 'http://TEXT4.fr',
              title: 'Réhabilitations',
            },
            {
              url: 'http://TEXT5.fr',
              title: 'Scolaire',
            },
          ]}
          image={img}
        />
      </div>
      <div className="lame">
        <PgfKeyFigure
          title="999 projets"
          description="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
        />
        <PgfKeyFigure
          title="1250 Logements créés"
          description="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
        />
      </div>
      <div className="lame">
        <PgfTextImage
          title="Lorem ipsum sit dolor amet"
          text="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
          image={img2}
        />
        <PgfTextImage
          inverted="inverted"
          title="Lorem ipsum sit dolor amet"
          text="Lorem ipsum sit dolor amet sit dolor amet. Lorem ipsum sit dolor amet sit dolor amet"
          image={img2}
        />
      </div>
      <div className="lame">

      </div>
    </div>
    <Footer />
  </div>)
;
