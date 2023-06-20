import { describe, it, beforeEach } from 'vitest';
import { render, RenderResult } from '@testing-library/react';

import App from '../routes';

describe('App', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<App />);
  });

  it('renders correctly', () => {
    const { getByRole } = renderResult;

    const topBarElement = getByRole('top-bar');
    const searchElement = getByRole('search');
    const listElement = getByRole('list');

    expect(topBarElement).toBeInTheDocument();
    expect(searchElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });
});
