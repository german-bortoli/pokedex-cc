import { useQuery } from 'react-query';

import { getListMoves } from '../services';

export const useFetchListMoves = () => {
  return useQuery(['fetchMoves'], async () => {
    return getListMoves();
  });
};
