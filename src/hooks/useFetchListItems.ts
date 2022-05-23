import { useQuery } from 'react-query';

import { getListItems } from '../services';

export const useFetchListItems = () => {
  return useQuery(['fetchItems'], async () => {
    return getListItems();
  });
};
