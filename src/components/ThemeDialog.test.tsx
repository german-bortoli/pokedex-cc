import React from 'react';

import { render, screen } from '@testing-library/react';

import {
  ThemeDialog,
  ThemeDialogActions,
  ThemeDialogContent,
  ThemeDialogTitle
} from './ThemeDialog';

test('it does not break', () => {
  render(
    <ThemeDialog open data-testid="test-dialog">
      <ThemeDialogTitle id="test" onClose={() => {}} data-testid="test-title">
        Test Title
      </ThemeDialogTitle>
      <ThemeDialogContent data-testid="test-content">
        Test content
      </ThemeDialogContent>
      <ThemeDialogActions data-testid="test-actions">
        Test Actions
      </ThemeDialogActions>
    </ThemeDialog>
  );

  expect(screen.getByTestId('test-dialog')).toBeVisible();
  expect(screen.getByTestId('test-title')).toBeVisible();
  expect(screen.getByTestId('test-content')).toBeVisible();
  expect(screen.getByTestId('test-actions')).toBeVisible();
});
