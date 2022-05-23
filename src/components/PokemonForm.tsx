import React from 'react';

import { Button } from '@mui/material';
import { styled } from '@mui/system';

import { NamedResource, PokemonInput } from '../types';

import HeldItemsAutocomplete from './PokemonForm/HeldItemsAutocomplete';
import NamedResourceAutocomplete from './PokemonForm/NamedResourceAutocomplete';
import ThemeTextField from './ThemeTextField';
import PokemonImageUploader from './PokemonForm/PokemonImageUploader';

const StyledForm = styled('form')`
  // @TODO: Add form styles here.
  display: flex;
  flex-direction: column;
`;

const StyledRightInput = styled(ThemeTextField)(({ theme }) => ({
  marginLeft: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    marginLeft: 0
  }
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

export interface AutocompleteInputProps {
  resources: NamedResource[];
  isLoading?: boolean;
  isError?: boolean;
}

export interface PokemonFormProps {
  abilities: AutocompleteInputProps;
  items: AutocompleteInputProps;
  moves: AutocompleteInputProps;
  onSubmit?: (pokemon: PokemonInput) => void;
  pokemonTypes: AutocompleteInputProps;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PokemonForm = ({
  abilities,
  items,
  moves,
  onSubmit,
  pokemonTypes
}: PokemonFormProps) => {
  const newPokemon = {
    name: '',
    order: 0,
    base_experience: 0,
    height: 0,
    weight: 0,
    items: [],
    moves: [],
    types: [],
    abilities: []
  };
  const [pokemon, setPokemon] = React.useState<PokemonInput>(newPokemon);

  const handleChange = (
    options: NamedResource[] | NamedResource | string | number,
    propName: string
  ) => {
    setPokemon({ ...pokemon, [propName]: options });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(pokemon);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledWrapper>
        <ThemeTextField
          variant="standard"
          name="name"
          label="Name"
          onChange={event => handleChange(event.target.value, 'name')}
        />
      </StyledWrapper>
      <StyledWrapper>
        <ThemeTextField
          variant="standard"
          name="order"
          label="Order"
          type="number"
          onChange={event => handleChange(event.target.value, 'order')}
        />
        <StyledRightInput
          variant="standard"
          name="base_experience"
          label="Base Experience"
          type="number"
          onChange={event => handleChange(event.target.value, 'base_experience')}
        />
      </StyledWrapper>
      <StyledWrapper>
        <ThemeTextField
          variant="standard"
          name="height"
          label="Height"
          type="number"
          onChange={event => handleChange(event.target.value, 'height')}
        />
        <StyledRightInput
          variant="standard"
          name="weight"
          label="Weight"
          type="number"
          onChange={event => handleChange(event.target.value, 'weight')}
        />
      </StyledWrapper>

      <StyledWrapper>
        <HeldItemsAutocomplete
          isError={items.isError}
          isLoading={items.isLoading}
          isMulti
          label="Items"
          onChange={item => handleChange(item, 'items')}
          resources={items.resources}
        />
      </StyledWrapper>

      <StyledWrapper>
        <NamedResourceAutocomplete
          isError={abilities.isError}
          isLoading={abilities.isLoading}
          isMulti
          label="Abilities"
          onChange={item => handleChange(item, 'abilities')}
          resources={abilities.resources}
        />
      </StyledWrapper>

      <StyledWrapper>
        <NamedResourceAutocomplete
          isError={moves.isError}
          isLoading={moves.isLoading}
          isMulti
          label="Moves"
          onChange={item => handleChange(item, 'moves')}
          resources={moves.resources}
        />
      </StyledWrapper>

      <StyledWrapper>
        <NamedResourceAutocomplete
          isError={pokemonTypes.isError}
          isLoading={pokemonTypes.isLoading}
          isMulti
          label="Types"
          onChange={item => handleChange(item, 'pokemonTypes')}
          resources={pokemonTypes.resources}
        />
      </StyledWrapper>
      <StyledWrapper>
          <PokemonImageUploader />
      </StyledWrapper>
      <Button
        type="submit"
        variant="contained"
        sx={{ width: 100, alignSelf: 'flex-end', marginTop: '20px' }}
      >
        Save
      </Button>
    </StyledForm>
  );
};

export default PokemonForm;
