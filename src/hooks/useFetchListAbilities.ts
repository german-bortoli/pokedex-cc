import { useQuery } from 'react-query';

import { getListAbilities } from '../services';

export const useFetchListAbilities = () => {
  return useQuery(['fetchAbilities'], async () => {
    return getListAbilities();
  });
};
