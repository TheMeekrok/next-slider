import { useEffect, useState } from "react";

/**
 * A custom React hook for managing pagination state with auto-sliding functionality.
 *
 * @param {number} options.defaultPages - The default total number of pages. Used to prerender paginator while other components are mounting.
 * @param {number} options.slideDurationMs - The duration (in milliseconds) for automatically sliding to the next page.
 *
 * @returns {number} page - The current page state.
 * @returns {Function} setPage - Function used to update the current page.
 * @returns {number} pages - The total number of pages.
 * @returns {Function} setPages - Function used to update total number of pages when all components are mounted.
 *
 */
export const usePaginator = ({
  defaultPages,
  slideDurationMs,
}: {
  defaultPages: number;
  slideDurationMs: number;
}) => {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(defaultPages);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage((page) => (page + 1) % pages);
    }, slideDurationMs);

    return () => clearInterval(timeout);
  }, [page]);

  return {
    page,
    setPage,
    pages,
    setPages,
  };
};
