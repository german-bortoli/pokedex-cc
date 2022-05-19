import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { pokemonsFixture } from '../fixtures/pokemons';

import PokemonsList from './PokemonsList';

export default {
  title: 'Components/Pokemons/List',
  component: PokemonsList,
} as ComponentMeta<typeof PokemonsList>;

const Template: ComponentStory<typeof PokemonsList> = args => (
  <PokemonsList {...args} />
);

export const ListWithPokemons = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListWithPokemons.args = {
  pokemons: pokemonsFixture,
};

export const EmptyList = Template.bind({});

EmptyList.args = {
  pokemons: [],
};

export const IsLoadingList = Template.bind({});

IsLoadingList.args = {
  pokemons: [],
  isLoading: true,
};
