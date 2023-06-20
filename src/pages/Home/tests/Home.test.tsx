import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '../index';

describe('Home', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Home />);

    const searchElement = getByRole('search');
    const listElement = getByRole('list');

    expect(searchElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });
});
