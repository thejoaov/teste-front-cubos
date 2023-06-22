import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Movie from '../index';

describe('Movie', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Movie />);

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
