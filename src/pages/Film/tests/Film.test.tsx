import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '../index';

describe('Home', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Home />);

    const titleElement = getByRole('title');
    const dateElement = getByRole('date');
    const sinopsisElement = getByRole('sinposis');
    const infoElement = getByRole('info');
    const imageElement = getByRole('image');
    const tagsElement = getByRole('tags');
    const approvalElement = getByRole('approval');

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(sinopsisElement).toBeInTheDocument();
    expect(infoElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(tagsElement).toBeInTheDocument();
    expect(approvalElement).toBeInTheDocument();
  });
});
