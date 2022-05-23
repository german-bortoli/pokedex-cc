import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeldItemsAutocomplete from '../components/PokemonForm/HeldItemsAutocomplete';
import { heldItems } from '../fixtures/heldItems';

export default {
  title: 'Components/Pokemons/Autocomplete',
  component: HeldItemsAutocomplete,
} as ComponentMeta<typeof HeldItemsAutocomplete>;

const Template: ComponentStory<typeof HeldItemsAutocomplete> = args => (
  <HeldItemsAutocomplete {...args} />
);

export const ItemsAutocomplete = Template.bind({});
ItemsAutocomplete.args = {
  resources: heldItems.results,
  isMulti: true,
  label: 'Pick items',
};
