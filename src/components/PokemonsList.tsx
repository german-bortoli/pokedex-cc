import React from 'react';

import { Alert, Grid, Skeleton } from '@mui/material';

import { NamedResource, Pokemons } from '../types';

import PokemonListCard from './PokemonListCard';

export interface PokemonsListProps {
  isError?: boolean;
  isLoading?: boolean;
  onViewPokemon?: (pokemonItem: NamedResource) => void;
  pokemons: Pokemons;
}

// Renders a list of pokemons and check if there are any pokemons found.
const PokemonsList = ({
  pokemons,
  onViewPokemon,
  isError,
  isLoading,
}: PokemonsListProps) => {
  // Handle a pokemon view event, should open the information of this pokemon.
  const handleViewPokemon = (pokemon: NamedResource) => {
    if (onViewPokemon) {
      onViewPokemon(pokemon);
    }
  };

  if (isError) {
    return (
      <Alert severity="error">An error has occurred while fetching pokemons.</Alert>
    );
  }

  if (isLoading) {
    return (
      <Grid container justifyContent="center" spacing={1}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(key => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <Skeleton variant="rectangular" width={250} height={190} />
          </Grid>
        ))}
      </Grid>
    );
  }

  // If there are no any pokemon found, show an alert.
  if (pokemons.length === 0) {
    return <Alert severity="info">No pokemons found</Alert>;
  }

  // Show a grid with pokemons
  return (
    <Grid container justifyContent="center" spacing={1}>
      {pokemons.map(pokemon => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
          <PokemonListCard
            key={pokemon.name}
            onViewPokemon={() => handleViewPokemon(pokemon)}
            pokemonItem={pokemon}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonsList;
