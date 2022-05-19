import React from 'react';

import {
  capitalize,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography
} from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

import { PokemonListItem } from '../types';
import { getPokemonImageUrl } from '../utils';

const StyledCardMedia = styled(CardMedia)`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export interface PokemonListCardProps {
  onViewPokemon?: (pokemonItem: PokemonListItem) => void;
  pokemonItem: PokemonListItem;
}

// Renders a pokemon from listing resource.
const PokemonListCard = ({ pokemonItem, onViewPokemon }: PokemonListCardProps) => {
  const handleViewPokemon = () => {
    if (onViewPokemon) {
      onViewPokemon(pokemonItem);
    }
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={handleViewPokemon}>
        <StyledCardMedia>
          <img
            alt={`pokemon ${pokemonItem.name}`}
            height="100"
            src={getPokemonImageUrl(pokemonItem.url)}
          />
        </StyledCardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {capitalize(pokemonItem.name)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonListCard;
