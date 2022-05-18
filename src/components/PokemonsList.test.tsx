import { render, screen } from '@testing-library/react';

import { pokemonsFixture } from '../fixtures/pokemons';

import PokemonsList from './PokemonsList';

test('Renders empty pokemon list', () => {
  render(<PokemonsList pokemons={[]} />);
  const warningMessage = screen.getByText(/No pokemons found/i);
  expect(warningMessage).toBeInTheDocument();
});

test('Renders a list of 10 pokemons', () => {
  const { container } = render(<PokemonsList pokemons={pokemonsFixture} />);
  const boxes = container.getElementsByClassName('MuiGrid-item');

  expect(boxes.length).toBe(10);
});
