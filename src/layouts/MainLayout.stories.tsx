import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainLayout from './MainLayout';

export default {
  title: 'Layout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = args => <MainLayout {...args} />;

export const MainLayoutWithHeader = Template.bind({});

MainLayoutWithHeader.args = {
  children: 'Hello wolrd',
};
