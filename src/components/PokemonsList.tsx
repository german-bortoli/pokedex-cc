import React from 'react';

import { Grid } from '@mui/material';

import { PokemonListItem, Pokemons } from '../types';

import PokemonListCard from './PokemonListCard';

export interface PokemonsListProps {
  pokemons: Pokemons;
  onViewPokemon?: (pokemonItem: PokemonListItem) => void;
}

const PokemonsList = ({ pokemons, onViewPokemon }: PokemonsListProps) => {
  const handleViewPokemon = (pokemon: PokemonListItem) => {
    if (onViewPokemon) {
      onViewPokemon(pokemon);
    }
  };

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
