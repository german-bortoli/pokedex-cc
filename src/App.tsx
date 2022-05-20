import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Create a client
const queryClient = new QueryClient();

import { SnackBarProvider } from './contexts/SnackBarContext';
import MainLayout from './layouts/MainLayout';
import PokemonListPage from './pages/PokemonListPage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackBarProvider>
        <MainLayout>
          <PokemonListPage />
        </MainLayout>
      </SnackBarProvider>
    </QueryClientProvider>
  );
}

export default App;
