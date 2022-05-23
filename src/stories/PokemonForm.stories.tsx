import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PokemonForm from '../components/PokemonForm';

export default {
  title: 'Components/Pokemons/Form',
  component: PokemonForm,
} as ComponentMeta<typeof PokemonForm>;

const Template: ComponentStory<typeof PokemonForm> = args => (
  <PokemonForm {...args} />
);

export const Form = Template.bind({});
Form.args = {};
