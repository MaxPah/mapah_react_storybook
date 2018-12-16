import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Menu from '../components/1-Atoms/Menu/Menu';
import Brand from '../components/1-Atoms/Brand/Brand';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('Menu', module)
    .add('test1', () => <Menu title="TestToto1" />)
    .add('test2', () => <Menu title="TestToto2" />);

    storiesOf('Brand', module)
      .add('Header', () => <Brand title="Maxime PAHUD" />);
