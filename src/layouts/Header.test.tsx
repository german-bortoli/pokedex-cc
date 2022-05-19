import React from 'react';

import { render, screen } from '@testing-library/react';

import Header from './Header';

test('it does not explode', () => {
    render(<Header />);
    expect(screen.getByText(/Pokedex/i)).toBeInTheDocument();
});