import { AvatarType } from '../types';

/**
 * Get pokemon id from the profile URL
 * @param url
 * @returns
 */
export const getPokemonIdFromUrl = (url: string): string => {
  const id = url.split('/')[6];
  return id;
};

/**
 * Get the image URL from the profile URL
 * @param url
 * @returns
 */
export const getPokemonImageUrl = (
  url: string | number,
  type: AvatarType
): string => {
  // @TODO: impelement invalid url fallback
  let id;
  if (typeof url === 'string') {
    id = getPokemonIdFromUrl(url);
  } else {
    id = url;
  }

  if (!id) {
    return 'https://via.placeholder.com/475x475';
  }

  if (type === AvatarType.BIG) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  return `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/${id}.png`;
};



/**
 * Get the image of an item
 * @param url
 * @returns
 */
 export const getItemImageUrl = (
  name: string
): string => {
  return `https://github.com/PokeAPI/sprites/raw/master/sprites/items/${name}.png`;
};