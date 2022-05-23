import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import PokemonProfile from '../components/PokemonProfile';
import { pokemon } from '../fixtures/pokemonProfile';

export default {
  title: 'Components/Pokemons/Profile',
  component: PokemonProfile
} as ComponentMeta<typeof PokemonProfile>;

const Template: ComponentStory<typeof PokemonProfile> = args => (<PokemonProfile {...args} />);

export const Profile = Template.bind({});
Profile.args = {
  pokemon,
  isLoading: false,
  isError: false
};

export const Loading = Template.bind({});
Loading.args = {
  pokemon: undefined,
  isLoading: true,
  isError: false
};

export const Error = Template.bind({});
Error.args = {
  pokemon: undefined,
  isLoading: true,
  isError: true
};
