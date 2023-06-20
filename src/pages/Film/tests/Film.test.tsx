import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '../index';

describe('Home', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Home />);

    const topBarElement = getByTestId('top-bar');
    const titleElement = getByTestId('title');
    const dateElement = getByTestId('date');
    const sinopsisElement = getByTestId('sinposis');
    const infoElement = getByTestId('info');
    const imageElement = getByTestId('image');
    const tagsElement = getByTestId('tags');

    expect(topBarElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(sinopsisElement).toBeInTheDocument();
    expect(infoElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(tagsElement).toBeInTheDocument();
  });
});
