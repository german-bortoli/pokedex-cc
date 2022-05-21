import React from 'react';

import { render, screen } from '@testing-library/react';

import { pokemon } from '../fixtures/pokemonProfile';

import PokemonProfile from './PokemonProfile';

test('it does not explode', () => {
  render(<PokemonProfile pokemon={pokemon} isLoading={false} isError={false} />);
  expect(screen.getByText(/height/i)).toBeInTheDocument();
});

test('is loading', () => {
  render(<PokemonProfile pokemon={undefined} isLoading={true} isError={false} />);
  expect(screen.getByTestId('skeleton-loading1')).toBeInTheDocument();
});

test('has error', () => {
  render(<PokemonProfile pokemon={undefined} isLoading={true} isError={true} />);
  expect(screen.getByTestId('profile-error-card')).toBeInTheDocument();
});
