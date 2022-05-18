import React from 'react';

import {
  capitalize,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';

import { PokemonListItem } from '../types';
import { getPokemonImageUrl } from '../utils';

export interface PokemonListCardProps {
  pokemonItem: PokemonListItem;
  onViewPokemon?: (pokemonItem: PokemonListItem) => void;
}

const PokemonListCard = ({ pokemonItem, onViewPokemon }: PokemonListCardProps) => {
  const handleViewPokemon = () => {
    if (onViewPokemon) {
      onViewPokemon(pokemonItem);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleViewPokemon}>
        <CardMedia
          component="img"
          height="100"
          image={getPokemonImageUrl(pokemonItem.url)}
          alt={pokemonItem.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {capitalize(pokemonItem.name)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonListCard;
