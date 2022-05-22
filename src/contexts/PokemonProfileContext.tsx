import React, { createContext, useContext, useState, FC } from 'react';

import { ThemeDialog, ThemeDialogContent } from '../components';
import PokemonProfile from '../components/PokemonProfile';
import { useFetchPokemonProfile } from '../hooks';

type PokemonProfileContextActions = {
  showPokemonProfile: (name: string) => void;
};

const PokemonProfileContext = createContext({} as PokemonProfileContextActions);

interface PokemonProfileContextProviderProps {
  children: React.ReactNode;
}

type PokemonProfileProps = {
  name: string;
  onClose: () => void;
};

const PokemonProfileElement = ({ name, onClose }: PokemonProfileProps) => {
  const { data: pokemon, isLoading, isError } = useFetchPokemonProfile(name);
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    onClose();
  };

  if (!name) {
    setOpen(false);
  }

  return (
    <ThemeDialog
      aria-labelledby="pokemon-profile-title"
      open={open}
      fullWidth
      maxWidth="lg"
    >
      <ThemeDialogContent sx={{padding: 0}}>
        <PokemonProfile
          isError={isError}
          isLoading={isLoading}
          onClose={handleClose}
          pokemon={pokemon}
        />
      </ThemeDialogContent>
    </ThemeDialog>
  );
};

const PokemonProfileProvider: FC<PokemonProfileContextProviderProps> = ({
  children
}) => {
  const [name, setName] = useState('');

  const showPokemonProfile = (pokemonName: string) => {
    setName(pokemonName);
  };

  let profile = null;
  if (name) {
    profile = <PokemonProfileElement name={name} onClose={() => setName('')} />;
  }

  return (
    <PokemonProfileContext.Provider value={{ showPokemonProfile }}>
      {profile}
      {children}
    </PokemonProfileContext.Provider>
  );
};

const usePokemonProfile = (): PokemonProfileContextActions => {
  const context = useContext(PokemonProfileContext);
  if (!context) {
    throw new Error('useSnackBar must be used within an SnackBarProvider');
  }

  return context;
};

export { PokemonProfileProvider, usePokemonProfile };
