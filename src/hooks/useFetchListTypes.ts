import { useQuery } from 'react-query';

import { getListTypes } from '../services';

export const useFetchListTypes = () => {
  return useQuery(['fetchTypes'], async () => {
    return getListTypes();
  });
};
