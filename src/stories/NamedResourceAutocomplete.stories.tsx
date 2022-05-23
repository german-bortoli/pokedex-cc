import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import NamedResourceAutocomplete from '../components/PokemonForm/NamedResourceAutocomplete';
import { moves } from '../fixtures/moves';

export default {
  title: 'Components/Pokemons/Autocomplete',
  component: NamedResourceAutocomplete,
} as ComponentMeta<typeof NamedResourceAutocomplete>;

const Template: ComponentStory<typeof NamedResourceAutocomplete> = args => (
  <NamedResourceAutocomplete {...args} />
);

export const MovesAutocomplete = Template.bind({});
MovesAutocomplete.args = {
  resources: moves.results,
  isMulti: true,
  label: 'Moves',
};
