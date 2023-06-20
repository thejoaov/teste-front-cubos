import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '../index';

describe('Home', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home />);
    const headingElement = getByText(/Home/i);
    expect(headingElement).toBeInTheDocument();
  });
});
