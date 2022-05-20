import axios from 'axios';

import {
  Abilities,
  EffectEntry,
  EffectEntryResponse,
  Move,
  PokemonListResponse,
  PokemonResponse,
} from '../types';

const DEFAULT_POKEMON_LIMIT = 25;

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getListPokemons = async (
  offset?: number,
  limit?: number
): Promise<PokemonListResponse | never> => {
  const response = await pokeApi.get(
    `/pokemon?limit=${limit || DEFAULT_POKEMON_LIMIT}&offset=${offset || 0}`
  );
  return { count: response.data.count, pokemons: response.data.results };
};

export const getPokemonResourceFromName = async (
  name: string
): Promise<PokemonResponse | never> => {
  const response = await pokeApi.get(`/pokemon/${name}`);
  return response.data;
};

export const getPokemonAbilities = async (
  abilities: Abilities
): Promise<EffectEntry[]> => {
  const response = await Promise.all(
    abilities.map(async ({ ability }) => {
      const abilityResponse = await pokeApi.get(ability.url);
      const description = abilityResponse.data.effect_entries.find(
        (entry: EffectEntryResponse) => entry.language.name === 'en'
      );

      return { description, name: abilityResponse.data.name };
    })
  );
  return response;
};

export const getPokemonMoves = async (moves: Move[]): Promise<EffectEntry[]> => {
  const response = await Promise.all(
    moves.map(async move => {
      const moveResponse = await pokeApi.get(move.url);
      const description = moveResponse.data.effect_entries.find(
        (entry: EffectEntryResponse) => entry.language.name === 'en'
      );

      return { description, name: moveResponse.data.name };
    })
  );

  return response;
};
