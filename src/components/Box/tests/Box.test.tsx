import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Box from '../index';

describe('Box', () => {
  it('renders children', () => {
    const { getByText } = render(<Box>Hello, World!</Box>);
    const greeting = getByText(/Hello, World!/);
    expect(greeting).toBeInTheDocument();
  });

  it('passes through HTML attributes', () => {
    const { container } = render(<Box id="test" />);
    expect(container.querySelector('#test')).toBeInTheDocument();
  });
});
