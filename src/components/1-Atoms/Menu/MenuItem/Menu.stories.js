import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Menu from './Menu';

export const menu = {
  id: '1',
  title: 'Test Menu',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinMenu: action('onPinMenu'),
  onArchiveMenu: action('onArchiveMenu'),
};

storiesOf('Menu', module)
  .add('default', () => <Menu menu={menu} {...actions} />)
  .add('pinned', () => <Menu menu={{ ...menu, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Menu menu={{ ...menu, state: 'TASK_ARCHIVED' }} {...actions} />);