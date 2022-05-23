import React from 'react';

import {
  Box,
  Chip,
  TextField,
  Autocomplete,
  Skeleton,
  Alert,
  Avatar,
  capitalize
} from '@mui/material';

import { NamedResource } from '../../types';

export interface NamedResourceAutocompleteProps {
  avatarResolver?: (res: NamedResource) => string;
  resources: readonly NamedResource[];
  isError?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  label: string;
  onChange: (item: NamedResource | NamedResource[]) => void;
}

const NamedResourceAutocomplete = ({
  avatarResolver,
  resources,
  isError,
  isLoading,
  isMulti,
  label,
  onChange
}: NamedResourceAutocompleteProps) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" height={50} />;
  }

  if (isError) {
    return (
      <Alert severity="error">An error has occurred while fetching data.</Alert>
    );
  }

  const formatLabel = (option: NamedResource) => capitalize(option.name.replace(/-/gi, ' '));

  return (
    <Autocomplete
      multiple={isMulti}
      options={resources}
      onChange={(event, value) => {
        if (value) {
          onChange(value);
        }
      }}
      autoHighlight
      filterSelectedOptions={true}
      filterOptions={x => x}
      getOptionLabel={option => formatLabel(option)}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          // eslint-disable-next-line react/jsx-key
          <Chip
            avatar={
              avatarResolver ? (
                <Avatar alt={`avatar ${option.name}`} src={avatarResolver(option)} />
              ) : undefined
            }
            label={formatLabel(option)}
            {...getTagProps({ index })}
          />
        ))
      }
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {avatarResolver && (
            <img
              loading="lazy"
              width="20"
              src={avatarResolver(option)}
              srcSet={avatarResolver(option)}
              alt=""
            />
          )}
          {formatLabel(option)}
        </Box>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password' // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default NamedResourceAutocomplete;
