import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PokemonForm from '../components/PokemonForm';
import { abilities } from '../fixtures/abilities';
import { heldItems } from '../fixtures/heldItems';
import { moves } from '../fixtures/moves';
import { pokemonTypes } from '../fixtures/pokemon-types';

export default {
  title: 'Components/Pokemons/Form',
  component: PokemonForm,
} as ComponentMeta<typeof PokemonForm>;

const Template: ComponentStory<typeof PokemonForm> = args => (
  <PokemonForm {...args} />
);

export const Form = Template.bind({});
Form.args = {
  abilities: {
    resources: abilities.results,
    isError: false,
    isLoading: false,
  },
  moves: {
    resources: moves.results,
    isError: false,
    isLoading: false,
  },
  pokemonTypes: {
    resources: pokemonTypes.results,
    isError: false,
    isLoading: false,
  },
  items: {
    resources: heldItems.results,
    isError: false,
    isLoading: false,
  },
};
