import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import PokemonListCard from './PokemonListCard';

export default {
  title: 'Pokemons/Card',
  component: PokemonListCard,
} as ComponentMeta<typeof PokemonListCard>;

const Template: ComponentStory<typeof PokemonListCard> = args => (
  <PokemonListCard {...args} />
);

export const Card = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card.args = {
  pokemonItem: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
};

export const CardWithoutImage = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardWithoutImage.args = {
  pokemonItem: {
    name: 'default pokemon',
    url: 'https://wrong.url.com',
  },
};
