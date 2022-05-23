import React from 'react';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

import ThemeTextField from './ThemeTextField';

const StyledForm = styled(Box)`
  // @TODO: Add form styles here.
`;

const StyledRightInput = styled(ThemeTextField)(({ theme }) => ({
  marginLeft: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
}));

export interface PokemonFormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PokemonForm = ({ onSubmit }: PokemonFormProps) => {
  return (
    <StyledForm component="form">
      <div>
        <ThemeTextField variant="standard" name="name" label="Name" />
      </div>
      <div>
        <ThemeTextField
          variant="standard"
          name="order"
          label="Order"
          type="number"
        />
        <StyledRightInput
          variant="standard"
          name="base_experience"
          label="Base Experience"
          type="number"
        />
      </div>
      <div>
        <ThemeTextField
          variant="standard"
          name="height"
          label="Height"
          type="number"
        />
        <StyledRightInput
          variant="standard"
          name="weight"
          label="Weight"
          type="number"
        />
      </div>
    </StyledForm>
  );
};

export default PokemonForm;
