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
export const getPokemonImageUrl = (url: string): string => {
  // @TODO: impelement invalid url fallback
  const id = getPokemonIdFromUrl(url);

  if (!id) {
    return 'https://via.placeholder.com/475x475';
  }

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};
