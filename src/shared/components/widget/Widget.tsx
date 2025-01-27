import clsx from "clsx";
import { HTMLAttributes } from "react";

export const Widget = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...rest } = props;

  return (
    <div className={clsx(className, "bg-widget")} {...rest}>
      {children}
    </div>
  );
};
