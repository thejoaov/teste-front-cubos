import { useMemo } from 'react';
import { StyledPagination } from './styles';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onClick: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onClick,
  totalPages,
}) => {
  const [showRightArrow, showLeftArrow] = useMemo(() => {
    if (!currentPage && !totalPages) return [false, false];
    return [currentPage < totalPages, currentPage > 1];
  }, [currentPage, totalPages]);

  const paginationRange = useMemo((): number[] => {
    if (!currentPage && !totalPages) return [];
    const maxPages = 5;
    const halfMaxPages = Math.floor(maxPages / 2);
    const firstPage = currentPage - halfMaxPages;
    const lastPage = currentPage + halfMaxPages;
    const pages = [];

    if (totalPages <= maxPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= halfMaxPages) {
      for (let i = 1; i <= maxPages; i++) {
        pages.push(i);
      }
    } else if (currentPage >= totalPages - halfMaxPages) {
      for (let i = totalPages - maxPages + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i);
      }
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <StyledPagination>
      {showLeftArrow && (
        <button
          role="previous-page"
          onClick={() => onClick(currentPage - 1)}
          disabled={!showLeftArrow}
          aria-disabled={!showLeftArrow}
        >
          {'<'}
        </button>
      )}

      {paginationRange.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            role={`page-${pageNumber}`}
            onClick={() => onClick(pageNumber)}
            disabled={pageNumber === currentPage}
            aria-selected={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        );
      })}

      {showRightArrow && (
        <button
          role="next-page"
          onClick={() => onClick(currentPage + 1)}
          disabled={!showRightArrow}
          aria-disabled={!showRightArrow}
        >
          {'>'}
        </button>
      )}
    </StyledPagination>
  );
};

export default Pagination;
