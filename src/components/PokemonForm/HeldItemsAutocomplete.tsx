import React from 'react';

import { getItemImageUrl } from '../../utils';

import NamedResourceAutocomplete, { NamedResourceAutocompleteProps } from './NamedResourceAutocomplete';

const HeldItemsAutocomplete = (props: NamedResourceAutocompleteProps) => {
  return (
    <NamedResourceAutocomplete
    avatarResolver={({ name }) => getItemImageUrl(name)}
      {...props}
    />
  );
};

export default HeldItemsAutocomplete;
