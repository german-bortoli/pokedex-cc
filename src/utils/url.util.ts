export const getPokemonId = (url: string): string => {
  const id = url.split('/')[6];
  return id;
};

export const getPokemonImageUrl = (url: string): string => {
  const id = getPokemonId(url);
  // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};
