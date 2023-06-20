import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import SearchBox from '../index';

describe('SearchBox', () => {
  it('renders an input box', () => {
    const { getByRole } = render(<SearchBox />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('passes through props', () => {
    const { getByPlaceholderText } = render(
      <SearchBox placeholder="Search..." />
    );
    const input = getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });
});
