import { Url } from './generic.types';

export interface NamedResource {
  name: string;
  url: string;
}

export type Pokemons = NamedResource[];

export type PokemonType = {
  slot: number;
  type: NamedResource;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: NamedResource;
};

export type PokemonListResponse = {
  pokemons: Pokemons;
  count: number;
};

export type Sprites = {
  back_default: Url;
  back_female: Url;
  back_shiny: Url;
  back_shiny_female: Url;
  front_default: Url;
  front_female: Url;
  front_shiny: Url;
  front_shiny_female: Url;
  other: {
    dream_world: {
      front_default: Url;
      front_female: Url;
    };
    home: {
      front_default: Url;
      front_female: Url;
      front_shiny: Url;
      front_shiny_female: Url;
    };
    'official-artwork': {
      front_default: Url;
    };
  };
};

export type Move = NamedResource;
export type VersionGroupDetails = [
  {
    level_learned_at: number;
    move_learn_method: NamedResource;
    version_group: NamedResource;
  }
];

export type HeldItem = NamedResource;
export type VersionDetails = [rarity: number, version: NamedResource];

export type MoveType = (Move | VersionGroupDetails)[];
export type HeldItems = (HeldItem | VersionDetails)[];

export type Abilities = [{ ability: number; is_hidden: boolean; slot: number }];

export type PokemonResponse = {
  abilities: Abilities;
  base_experience: number;
  forms: NamedResource[];
  height: number;
  held_items: HeldItems;
  id: number;
  is_default: boolean;
  location_area_encounters: Url;
  moves: MoveType;
  name: string;
  order: number;
  species: NamedResource;
  sprites: Sprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};
