import React, { useState } from 'react';

import { Container } from '@mui/system';

import PokemonsList from '../components/PokemonsList';
import ThemePagination from '../components/ThemePagination';
import { usePokemonList } from '../hooks/usePokemonList';
import { LimitOffsetType } from '../types';

const PokemonListPage = () => {
  const limit = 16;
  const [offset, setOffset] = useState(0);
  const { data, isLoading } = usePokemonList(offset, limit);

  const onPageChange = ({ offset }: LimitOffsetType) => {
    setOffset(offset);
  };

  return (
    <Container>
      <Container>
        <PokemonsList pokemons={data?.pokemons || []} isLoading={isLoading} />
        <ThemePagination
          count={data?.count || 0}
          limit={limit}
          offset={offset}
          onPageChange={onPageChange}
        />
      </Container>
    </Container>
  );
};

export default PokemonListPage;
