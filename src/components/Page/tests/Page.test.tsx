import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Page from '../index';

describe('Page', () => {
  it('renders children', () => {
    const { getByText } = render(<Page>Hello, World!</Page>);
    const greeting = getByText(/Hello, World!/);
    expect(greeting).toBeInTheDocument();
  });

  it('passes through HTML attributes', () => {
    const { container } = render(<Page id="test" />);
    expect(container.querySelector('#test')).toBeInTheDocument();
  });
});
