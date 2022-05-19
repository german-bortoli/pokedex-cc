import { useQuery } from 'react-query';

import { getListPokemons } from '../services';

export const usePokemonList = (offset?: number, limit?: number) => {
  return useQuery(['pokemonList', offset, limit], async () => {
    return getListPokemons(offset, limit);
  });
};
