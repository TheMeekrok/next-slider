import { Widget } from "@/shared/components";
import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface HomeInfoWidgetProps extends HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  title: string;
  description: string;
}

export const HomeInfoWidget = (props: HomeInfoWidgetProps) => {
  const { Icon, title, description } = props;

  return (
    <Widget
      className={clsx(
        "shrink-0 justify-between w-[calc(100vw-32px)] flex flex-col gap-[62px] p-4 lg:p-6 lg:w-[412px] rounded-[8px] data-[shadow=true]:lg:shadow-default"
      )}
    >
      <div className="flex gap-6 lg:gap-14 lg:flex-col items-center lg:items-start">
        <Icon className="w-[55px] h-[55px] shrink-0 lg:h-[80px] lg:w-[80px] text-violet-saturated" />
        <h3 className="text-l/7 leading">{title}</h3>
      </div>

      <h4 className="text-body/6 lg:hidden">{description}</h4>
    </Widget>
  );
};
