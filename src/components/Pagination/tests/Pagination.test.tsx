import { describe, it, vi } from 'vitest';
import { RenderResult, render } from '@testing-library/react';
import Pagination from '../index';

let component: RenderResult;

const currentPage = 1;
const totalPages = 10;
const onClick = vi.fn();

describe('Pagination', () => {
  beforeEach(() => {
    component = render(
      <Pagination
        currentPage={currentPage}
        onClick={onClick}
        totalPages={totalPages}
      />
    );
  });
  it('renders correctly', () => {
    component.rerender(
      <Pagination currentPage={2} onClick={onClick} totalPages={totalPages} />
    );
    const { getByRole } = component;

    expect(getByRole('previous-page')).toBeInTheDocument();
    expect(getByRole('next-page')).toBeInTheDocument();
    expect(getByRole('page-1')).toBeInTheDocument();
    expect(getByRole('page-2')).toBeInTheDocument();
    expect(getByRole('page-3')).toBeInTheDocument();
    expect(getByRole('page-4')).toBeInTheDocument();
    expect(getByRole('page-5')).toBeInTheDocument();
  });

  it('renders correctly when currentPage is 4', async () => {
    component.rerender(
      <Pagination currentPage={4} onClick={onClick} totalPages={totalPages} />
    );
    const { getByRole } = component;

    expect(getByRole('previous-page')).toBeInTheDocument();
    expect(getByRole('next-page')).toBeInTheDocument();

    expect(getByRole('page-2')).toBeInTheDocument();
    expect(getByRole('page-3')).toBeInTheDocument();
    expect(getByRole('page-4')).toBeInTheDocument();
    expect(getByRole('page-5')).toBeInTheDocument();
    expect(getByRole('page-6')).toBeInTheDocument();
  });

  it('should call onClick when clicking on a page', () => {
    const { getByRole } = component;

    getByRole('page-2').click();

    expect(onClick).toHaveBeenCalledWith(2);
  });

  it('should call onClick when clicking on the previous page', () => {
    const { getByRole } = render(
      <Pagination currentPage={2} onClick={onClick} totalPages={totalPages} />
    );

    getByRole('previous-page').click();

    expect(onClick).toHaveBeenCalledWith(1);
  });

  it('should call onClick when clicking on the next page', () => {
    const { getByRole } = component;

    getByRole('next-page').click();

    expect(onClick).toHaveBeenCalledWith(2);
  });

  it('should render correctly when currentPage is maxPages', () => {
    const { getByRole } = render(
      <Pagination
        currentPage={totalPages}
        onClick={onClick}
        totalPages={totalPages}
      />
    );

    expect(getByRole('page-8')).toBeInTheDocument();
    expect(getByRole('page-9')).toBeInTheDocument();
    expect(getByRole('page-10')).toBeInTheDocument();
  });
});
