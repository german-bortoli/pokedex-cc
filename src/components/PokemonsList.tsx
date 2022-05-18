import React from 'react';

import { Alert, Grid } from '@mui/material';

import { PokemonListItem, Pokemons } from '../types';

import PokemonListCard from './PokemonListCard';

export interface PokemonsListProps {
  pokemons: Pokemons;
  onViewPokemon?: (pokemonItem: PokemonListItem) => void;
}

// Renders a list of pokemons and check if there are any pokemons found.
const PokemonsList = ({ pokemons, onViewPokemon }: PokemonsListProps) => {
  // Handle a pokemon view event, should open the information of this pokemon.
  const handleViewPokemon = (pokemon: PokemonListItem) => {
    if (onViewPokemon) {
      onViewPokemon(pokemon);
    }
  };

  // If there are no any pokemon found, show an alert.
  if (pokemons.length === 0) {
    return <Alert severity="info">No pokemons found</Alert>;
  }

  // Show a grid with pokemons
  // @TODO: Research how to do this more responsive.
  return (
    <Grid container justifyContent="center" spacing={1}>
      {pokemons.map(pokemon => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
          <PokemonListCard
            pokemonItem={pokemon}
            onViewPokemon={() => handleViewPokemon(pokemon)}
            key={pokemon.name}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonsList;
