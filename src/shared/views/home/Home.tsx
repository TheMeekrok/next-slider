import { Fragment } from "react";
import { HomeInfoWidgets } from "./components/HomeInfoWidgets";

export const Home = () => {
  return (
    <Fragment>
      <div className="flex lg:gap-4 flex-col lg:flex-row lg:border-b border-middle-grey">
        <h1 className="lg:w-[412px] lg:text-violet-saturated text-violet-dark-hover text-h2 pb-2 border-b lg:border-none border-middle-grey">
          1.0
        </h1>
        <h2 className="text-violet-dark-hover lg:text-violet-saturated text-h2">
          Наши услуги
        </h2>
      </div>
      <HomeInfoWidgets />
    </Fragment>
  );
};
