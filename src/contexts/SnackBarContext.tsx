import React, { createContext, useContext, useState, FC } from 'react';

import MuiAlert, { AlertColor } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

type SnackBarContextActions = {
  showSnackBar: (
    text: string,
    severity: AlertColor,
    anchorOrigin?: SnackbarOrigin
  ) => void;
};

const SnackBarContext = createContext({} as SnackBarContextActions);

interface SnackBarContextProviderProps {
  children: React.ReactNode;
}

const SnackBarProvider: FC<SnackBarContextProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [severity, setSeverity] = useState<AlertColor>('info');
  const [anchorOrigin, setAnchorOrigin] = useState<SnackbarOrigin>({
    vertical: 'bottom',
    horizontal: 'center'
  });

  const showSnackBar = (
    text: string,
    severity: AlertColor,
    anchorOrigin?: SnackbarOrigin
  ) => {
    setMessage(text);
    setSeverity(severity);

    if (anchorOrigin) {
      setAnchorOrigin(anchorOrigin);
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackBarContext.Provider value={{ showSnackBar }}>
      <Snackbar
        anchorOrigin={anchorOrigin}
        autoHideDuration={6000}
        onClose={handleClose}
        open={open}
      >
        <MuiAlert sx={{ width: '100%' }} severity={severity} onClose={handleClose}>
          {message}
        </MuiAlert>
      </Snackbar>
      {children}
    </SnackBarContext.Provider>
  );
};

const useSnackBar = (): SnackBarContextActions => {
  const context = useContext(SnackBarContext);

  if (!context) {
    throw new Error('useSnackBar must be used within an SnackBarProvider');
  }

  return context;
};

export { SnackBarProvider, useSnackBar };
