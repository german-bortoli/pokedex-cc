import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Header from '../layouts/Header';

export default {
  title: 'Layout',
  component: Header,
} as ComponentMeta<typeof Header>;

export const MainHeader = () => {
  return <Header />;
};

MainHeader.story = {
  name: 'Header',
};
