"use client";

import clsx from "clsx";
import { Dispatch, FormEvent, SetStateAction } from "react";

export interface PaginatorProps {
  pages: number;
  slideDurationMs: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Paginator = (props: PaginatorProps) => {
  const { slideDurationMs, pages, page, setPage } = props;

  const onChange = (event: FormEvent<HTMLFieldSetElement>) => {
    const target = event.target as HTMLInputElement;
    setPage(Number(target.value));
  };

  return (
    <fieldset className="flex gap-2" onChange={onChange}>
      {Array(pages)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex">
            <input
              name="paginator"
              type="radio"
              value={index}
              id={index.toString()}
              className="appearance-none"
            />
            <label
              htmlFor={index.toString()}
              className={clsx(
                "bg-grey-204 h-2 rounded-full transition-[width,transform] duration-300 ease-in-out",
                page === index ? "w-10" : "w-2 hover:scale-125 cursor-pointer"
              )}
            >
              <div
                className={clsx(
                  "h-full rounded-full",
                  page === index
                    ? "bg-grey-28 animate-paginator-button-fill"
                    : ""
                )}
                style={{
                  animationDuration: `${slideDurationMs}ms`,
                }}
              />
            </label>
          </div>
        ))}
    </fieldset>
  );
};
