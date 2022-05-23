import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-dropzone-uploader/dist/styles.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

import { SnackBarProvider, PokemonProfileProvider } from './contexts';
import MainLayout from './layouts/MainLayout';
import PokemonListPage from './pages/PokemonListPage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackBarProvider>
        <PokemonProfileProvider>
          <MainLayout>
            <PokemonListPage />
          </MainLayout>
        </PokemonProfileProvider>
      </SnackBarProvider>
    </QueryClientProvider>
  );
}

export default App;
