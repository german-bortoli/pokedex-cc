import React from 'react';

import { render, screen } from '@testing-library/react';

import ThemePagination from './ThemePagination';

test('it does not explode', () => {
  render(
    <ThemePagination count={1126} limit={10} offset={0} onPageChange={() => null} />
  );
  expect(screen.getByText(/113/i)).toBeInTheDocument();
});
