import { render, screen } from '@testing-library/react';

import { pokemonsFixture } from '../fixtures/pokemons';

import PokemonListCard from './PokemonListCard';

test('Does not breaks pokemon card', () => {
  const pokemon = pokemonsFixture[0];

  render(<PokemonListCard pokemonItem={pokemon} />);
  const pokemonImage = screen.getByAltText(/pokemon bulbasaur/i);
  expect(pokemonImage).toHaveAttribute(
    'src',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  );
  expect(pokemonImage).toBeInTheDocument();
});
