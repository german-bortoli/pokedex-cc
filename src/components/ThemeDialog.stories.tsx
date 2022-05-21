import React from 'react';

import { Button, Typography } from '@mui/material';
import { ComponentMeta } from '@storybook/react';

import {
  ThemeDialog,
  ThemeDialogContent,
  ThemeDialogTitle,
  ThemeDialogActions
} from './ThemeDialog';

export default {
  title: 'Components/Dialog',
  component: ThemeDialog
} as ComponentMeta<typeof ThemeDialog>;

export function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <ThemeDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <ThemeDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </ThemeDialogTitle>
        <ThemeDialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </ThemeDialogContent>
        <ThemeDialogActions>
          <Button onClick={handleClose}>
            Save changes
          </Button>
        </ThemeDialogActions>
      </ThemeDialog>
    </div>
  );
}
