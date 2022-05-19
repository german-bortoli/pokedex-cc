import axios from 'axios';

import { PokemonListResponse, PokemonResponse } from '../types';

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
