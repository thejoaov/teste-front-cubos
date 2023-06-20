import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Loader from '../index';

describe('Loader', () => {
  it('renders the Loader component', () => {
    const { getByRole } = render(<Loader role="spinner" />);
    const loaderElement = getByRole('spinner');

    expect(loaderElement).toBeInTheDocument();
  });
});
