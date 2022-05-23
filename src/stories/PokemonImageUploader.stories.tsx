import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PokemonImageUploader from '../components/PokemonForm/PokemonImageUploader';

import 'react-dropzone-uploader/dist/styles.css';


export default {
  title: 'Components/Pokemons/Uploader',
  component: PokemonImageUploader,
} as ComponentMeta<typeof PokemonImageUploader>;

const Template: ComponentStory<typeof PokemonImageUploader> = () => (
  <PokemonImageUploader />
);

export const ImageUploader = Template.bind({});