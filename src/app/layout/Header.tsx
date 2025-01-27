import { ExitIcon, Logo } from "@/shared/icons";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-4 py-4 flex gap-4 border-y border-grey-225 justify-between lg:justify-start">
      <Link href="" className="flex gap-4 items-center lg:w-[412px]">
        <div className="bg-grey-28 flex justify-center items-center w-[28px] h-[28px] rounded-[4.67px]">
          <Logo className="h-[14px] w-[14px] text-white" />
        </div>
        <span className="text-body hidden lg:inline text-black-21">STEMPS</span>
      </Link>
      <div className="hidden lg:flex grow">
        <nav className="gap-6 grow flex">
          <Link className="text-body text-black-21" href="">
            О школе
          </Link>
          <Link className="text-body text-black-21" href="">
            Курсы
          </Link>
          <Link className="text-body text-black-21" href="">
            Библиотека
          </Link>
        </nav>
        <button className="px-4 flex gap-4 items-center text-black-21 text-body">
          Вход
          <ExitIcon className="w-[30px] h-7 text-black" />
        </button>
      </div>
      <button className="lg:hidden py-0.5 px-2 text-white bg-black-18 rounded-[4px] text-body">
        Меню
      </button>
    </header>
  );
};
