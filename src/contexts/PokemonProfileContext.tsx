import React, { createContext, useContext, useState, FC } from 'react';

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
};

const PokemonProfileElement = ({ name }: PokemonProfileProps) => {
  const { data: pokemon, isLoading, isError } = useFetchPokemonProfile(name);
  return (
    <PokemonProfile pokemon={pokemon} isLoading={isLoading} isError={isError} />
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
    profile = <PokemonProfileElement name={name} />;
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
