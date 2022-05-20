import { useQuery } from 'react-query';

import {
  getPokemonAbilities,
  getPokemonMoves,
  getPokemonResourceFromName,
} from '../services';

export const usePokemonProfile = (name: string) => {
  return useQuery(['pokemonProfile', name], async () => {
    const pokemon = await getPokemonResourceFromName(name);

    // @TODO: Ideally we may need to do some sort of paginated request here
    pokemon.fetched_abilities = await getPokemonAbilities(pokemon.abilities);
    pokemon.fetched_moves = await getPokemonMoves(
      pokemon.moves.map(move => move.move)
    );

    // @TODO: Fetch other things.
    return pokemon;
  });
};
