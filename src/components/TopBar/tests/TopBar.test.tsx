import { describe, it, beforeEach } from 'vitest';
import { render, RenderResult } from '@testing-library/react';

import TopBar from '../index';

let component: RenderResult;

describe('TopBar', () => {
  beforeEach(() => {
    component = render(<TopBar />);
  });

  it('renders correctly', () => {
    const { getByRole } = component;

    const topBarElement = getByRole('top-bar');

    expect(topBarElement).toBeInTheDocument();
  });

  it('renders the title correctly', () => {
    const { getByText } = component;

    const titleElement = getByText('Movies');

    expect(titleElement).toBeInTheDocument();
  });
});
