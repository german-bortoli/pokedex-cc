import React, { createContext, useContext, FC, useState } from 'react';

import { ThemeDialog, ThemeDialogContent, ThemeDialogTitle } from '../components';
import PokemonForm from '../components/PokemonForm';
import {
  useFetchListAbilities,
  useFetchListItems,
  useFetchListMoves,
  useFetchListTypes,
} from '../hooks';

type PokemonFormContextActions = {
  showPokemonForm: (isOpen: boolean) => void;
};

const PokemonFormContext = createContext({} as PokemonFormContextActions);

interface PokemonFormContextProviderProps {
  children: React.ReactNode;
}

const PokemonFormProvider: FC<PokemonFormContextProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const resAbilities = useFetchListAbilities();
  const resItems = useFetchListItems();
  const resMoves = useFetchListMoves();
  const resTypes = useFetchListTypes();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PokemonFormContext.Provider value={{ showPokemonForm: setOpen }}>
      <ThemeDialog
        onClose={handleClose}
        disableEscapeKeyDown
        aria-labelledby="add-pokemon-modal"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <ThemeDialogTitle id="add-pokemon-title" onClose={handleClose}>
          Add Pokemon (Change)
        </ThemeDialogTitle>
        <ThemeDialogContent dividers>
          <PokemonForm
            abilities={{
              resources: resAbilities.data?.results || [],
              isLoading: resAbilities.isLoading,
              isError: resAbilities.isError,
            }}
            items={{
              resources: resItems.data?.results || [],
              isLoading: resItems.isLoading,
              isError: resItems.isError,
            }}
            moves={{
              resources: resMoves.data?.results || [],
              isLoading: resMoves.isLoading,
              isError: resMoves.isError,
            }}
            pokemonTypes={{
              resources: resTypes.data?.results || [],
              isLoading: resTypes.isLoading,
              isError: resTypes.isError,
            }}
          />
        </ThemeDialogContent>
      </ThemeDialog>
      {children}
    </PokemonFormContext.Provider>
  );
};

const usePokemonForm = (): PokemonFormContextActions => {
  const context = useContext(PokemonFormContext);
  if (!context) {
    throw new Error('useSnackBar must be used within an SnackBarProvider');
  }

  return context;
};

export { PokemonFormProvider, usePokemonForm };
