import * as React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#FFDE00" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'center'}}>
          <AdbIcon sx={{ mr: 1, color: '#3B4CCA' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#3B4CCA',
              textDecoration: 'none'
            }}
          >
            POKEDEX
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
