import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

export interface PaginatedContainterProps {
  page: number;
  setPages: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

export const PaginatedContainer = (props: PaginatedContainterProps) => {
  const { page, setPages, children } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      containerRef.current?.children.length &&
      containerRef.current?.children.length > 0
    ) {
      setPages(containerRef.current?.children.length);
    }
  }, [containerRef]);

  useEffect(() => {
    containerRef.current?.children[page].scrollIntoView({
      behavior: "smooth",
    });

    // Remove shadow from all elements that are not highlighted
    Array.from(containerRef.current?.children ?? []).map((e, index) => {
      if (index !== page) e.setAttribute("data-shadow", "false");
    });

    // Add shadow current element
    containerRef.current?.children[page].setAttribute("data-shadow", "true");
  }, [page]);

  return (
    <div
      className="flex gap-4 overflow-auto disable-scrollbar lg:px-0.5 lg:py-1"
      ref={containerRef}
    >
      {children}
    </div>
  );
};
