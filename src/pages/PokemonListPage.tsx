import React, { useState } from 'react';

import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { Container } from '@mui/system';


import PokemonsList from '../components/PokemonsList';
import ThemePagination from '../components/ThemePagination';
import { useSnackBar } from '../contexts';
import { usePokemonList } from '../hooks';
import { LimitOffsetType } from '../types';

const DEFAULT_LIMIT = 20;

const PokemonListPage = () => {
  const { showSnackBar } = useSnackBar();
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [offset, setOffset] = useState(0);
  const { data, isLoading, error } = usePokemonList(offset, limit);

  const onPageChange = ({ offset }: LimitOffsetType) => {
    setOffset(offset);
  };

  if (error) {
    showSnackBar('An error occurred while fetching the data', 'error');
  }

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
