import { Url } from './generic.types';

export enum AvatarType {
  BIG,
  SMALL,
}

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

export type GenericResourceResponse = {
  results: NamedResource[];
  count: number;
  next: string | null;
  previous: string | null;
};

export interface PokemonInput {
  name: string;
  types: NamedResource[];
  order: number;
  base_experience: number;
  height: number;
  weight: number;
  items: NamedResource[];
  moves: NamedResource[];
  abilities: NamedResource[];
}

export type Sprites = {
  back_default: Url;
  back_female: Url;
  back_shiny: Url;
  back_shiny_female: Url;
  front_default: Url;
  front_female: Url;
  front_shiny: Url;
  front_shiny_female: Url;
  versions: { [key: string]: object };
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
export type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: NamedResource;
  version_group?: NamedResource;
}[];

export type VersionDetails = {
  move: NamedResource;
  version_group_details: VersionGroupDetails;
}[];
export type HeldItemVersionDetail = { rarity: number; version: NamedResource }[];

export type MoveType = {
  move: NamedResource;
  version_group_details: VersionGroupDetails;
}[];
export type HeldItems = {
  item: NamedResource;
  version_details: HeldItemVersionDetail;
}[];

export type Abilities = {
  ability: NamedResource;
  is_hidden: boolean;
  slot: number;
}[];

export type EffectEntryResponse = {
  effect: string;
  language: NamedResource;
};

export type EffectEntry = {
  name: string;
  description?: {
    effect?: string;
    short_effect?: string;
    language: NamedResource;
  };
};

export type PokemonResponse = {
  abilities: Abilities;
  fetched_abilities?: EffectEntry[];
  base_experience: number;
  game_indices: { game_index: number; version: NamedResource }[];
  past_types: { slot: number; type: NamedResource }[];
  forms: NamedResource[];
  height: number;
  held_items: HeldItems;
  id: number;
  is_default: boolean;
  location_area_encounters: Url;
  moves: MoveType;
  fetched_moves: EffectEntry[];
  name: string;
  order: number;
  species: NamedResource;
  sprites: Sprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};
