import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import PokemonsList from '../components/PokemonsList';
import { pokemonsFixture } from '../fixtures/pokemons';

export default {
  title: 'Components/Pokemons/List',
  component: PokemonsList,
} as ComponentMeta<typeof PokemonsList>;

const Template: ComponentStory<typeof PokemonsList> = args => (
  <PokemonsList {...args} />
);

export const List = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
List.args = {
  pokemons: pokemonsFixture,
};

export const Empty = Template.bind({});

Empty.args = {
  pokemons: [],
};

export const Error = Template.bind({});

Error.args = {
  pokemons: [],
  isError: true,
};

export const Loading = Template.bind({});

Loading.args = {
  pokemons: [],
  isLoading: true,
};
