import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ThemeDialog = styled(Dialog)`
  // @TODO: Add styling here
`;

const ThemeDialogContent = styled(DialogContent)`
  padding: 0;
`;

const ThemeDialogActions = styled(DialogActions)`
  & .MuiDialogActions-root {
    // @TODO: Add some style here
  }
`;

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const ThemeDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          data-testid="dialog-close-button"
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export { ThemeDialog, ThemeDialogActions, ThemeDialogContent, ThemeDialogTitle };
