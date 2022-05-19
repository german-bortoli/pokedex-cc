import React, { useState } from 'react';

import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { Container } from '@mui/system';

import PokemonsList from '../components/PokemonsList';
import ThemePagination from '../components/ThemePagination';
import { usePokemonList } from '../hooks/usePokemonList';
import { LimitOffsetType } from '../types';

const DEFAULT_LIMIT = 20;

const PokemonListPage = () => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [offset, setOffset] = useState(0);
  const { data, isLoading } = usePokemonList(offset, limit);

  const onPageChange = ({ offset }: LimitOffsetType) => {
    setOffset(offset);
  };

  return (
    <Container>
      <Container>
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Per Page
          </InputLabel>
          <NativeSelect
            defaultValue={DEFAULT_LIMIT}
            onChange={e => setLimit(Number(e.target.value))}
            inputProps={{
              name: 'perPage',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </NativeSelect>
        </FormControl>
      </Container>
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
