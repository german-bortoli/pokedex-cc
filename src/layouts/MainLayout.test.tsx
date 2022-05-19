import React from 'react';

import { render, screen } from '@testing-library/react';

import MainLayout from './MainLayout';

test('it does not explode', () => {
  render(
    <MainLayout>
      <span>Hello world</span>
    </MainLayout>
  );
  expect(screen.getByText(/Hello world/i)).toBeInTheDocument();
});
