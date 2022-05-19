import {
  getPageByLimitAndOffset,
  getNumberOfPagesByCount,
  getLimitAndOffsetByPage,
  getNextPageLimitAndOffsetByPage,
  getPreviousPageLimitAndOffsetByPage,
} from './pagination.util';
import { capitalize } from './string.util';
import { getPokemonIdFromUrl, getPokemonImageUrl } from './url.util';

test('getPageByLimitAndOffset', () => {
  expect(getPageByLimitAndOffset(20, 60)).toBe(4);
});

test('getNumberOfPagesByCount', () => {
  expect(getNumberOfPagesByCount(100, 20)).toBe(5);
});

test('getLimitAndOffsetByPage', () => {
  expect(getLimitAndOffsetByPage(3, 20)).toEqual({ limit: 20, offset: 40 });
  expect(getLimitAndOffsetByPage(0, 10)).toEqual({ limit: 10, offset: 0 });
  expect(getLimitAndOffsetByPage(1, 10)).toEqual({ limit: 10, offset: 0 });
});

test('getPreviousPageLimitAndOffsetByPage', () => {
  expect(getPreviousPageLimitAndOffsetByPage(3, 20)).toEqual({
    limit: 20,
    offset: 20,
  });
  expect(getPreviousPageLimitAndOffsetByPage(0, 10)).toEqual({
    limit: 10,
    offset: 0,
  });
  expect(getPreviousPageLimitAndOffsetByPage(1, 10)).toEqual({
    limit: 10,
    offset: 0,
  });
});

test('getNextPageLimitAndOffsetByPage', () => {
  expect(getNextPageLimitAndOffsetByPage(3, 20)).toEqual({ limit: 20, offset: 60 });
  expect(getNextPageLimitAndOffsetByPage(0, 10)).toEqual({ limit: 10, offset: 10 });
  expect(getNextPageLimitAndOffsetByPage(1, 10)).toEqual({ limit: 10, offset: 10 });
});

test('getPokemonIdFromUrl', () => {
  expect(getPokemonIdFromUrl('https://pokeapi.co/api/v2/pokemon/1/')).toBe('1');
  expect(getPokemonIdFromUrl('https://wrong.com')).toBe(undefined);
});

test('getPokemonImageUrl', () => {
  expect(getPokemonImageUrl('https://pokeapi.co/api/v2/pokemon/1/')).toBe(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  );
  expect(getPokemonImageUrl('https://wrong.com')).toBe(
    'https://via.placeholder.com/475x475'
  );
});

test('Capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('')).toBe('');
});
