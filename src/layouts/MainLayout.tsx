import React from 'react';

// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';

import Header from './Header';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

const StyledMainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  padding-top: 15px;

  @media (max-width: 600px) {
    min-height: calc(100vh - 56px);
  }
`;

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <StyledMainContainer>{children || null}</StyledMainContainer>
    </React.Fragment>
  );
};

export default MainLayout;
