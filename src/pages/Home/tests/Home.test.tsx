import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '../index';

describe('Home', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Home />);

    const topBarElement = getByTestId('top-bar');
    const searchElement = getByTestId('search');
    const listElement = getByTestId('list');

    expect(topBarElement).toBeInTheDocument();
    expect(searchElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });
});
