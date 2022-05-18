import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import PokemonsList from './PokemonsList';

export default {
  title: 'Pokemons/List',
  component: PokemonsList,
} as ComponentMeta<typeof PokemonsList>;

const Template: ComponentStory<typeof PokemonsList> = args => (
  <PokemonsList {...args} />
);

export const List = Template.bind({});

const pokemons = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
  },
  {
    name: 'charmeleon',
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
  },
  {
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/',
  },
  {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/',
  },
  {
    name: 'wartortle',
    url: 'https://pokeapi.co/api/v2/pokemon/8/',
  },
  {
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/',
  },
  {
    name: 'caterpie',
    url: 'https://pokeapi.co/api/v2/pokemon/10/',
  },
];

// More on args: https://storybook.js.org/docs/react/writing-stories/args
List.args = {
  pokemons,
};
