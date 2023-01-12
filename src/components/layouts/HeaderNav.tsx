import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import {
  SIDE_NAV_WIDTH,
  SIDE_NAV_COLLAPSED_WIDTH,
} from "constants/ThemeConstants";

interface PropsI {
  navCollapsed?: boolean;
  mobileNav?: boolean;
  isMobile?: boolean;
  toggleCollapsedNav?: () => void;
  toggleMobileNav?: () => void;
}

const HeaderNav = (props: PropsI) => {
  const { navCollapsed, toggleCollapsedNav } = props;

  return (
    <nav
      className={`flex flex-row items-center h-16 bg-user-300 px-2 sm:px-4 ${
        navCollapsed
          ? `w-[calc(100%_-_250px)] ml-[250px]`
          : `w-[calc(100%_-_80px)] ml-[80px]`
      } fixed z-20 top-0 left-0 border-b drop-shadow-lg`}
    >
      <div className="w-full px-6 flex flex-wrap items-center justify-between">
        <a href="" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Stake Logo"
          />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-sm text-white font-medium bg-transparent focus:outline-none rounded-lg border-none px-5 py-2.5 text-center mr-3 hover:bg-white/5 focus:ring-4 focus:ring-gray-600/10"
          >
            Sign In
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Register
          </button>
        </div>
      </div>
      <button
        type="button"
        className={`absolute top-2/4 left-[-20px] translate-y-[-50%] flex flex-row h-[30px] w-[40px] items-center justify-center rounded-[15px] bg-user-200 hover:bg-user-200/90 focus:outline-none ${
          !navCollapsed && "hidden"
        }`}
        onClick={toggleCollapsedNav}
      >
        <AiOutlineMenuFold style={{ color: "white" }} />
      </button>
    </nav>
  );
};

export default HeaderNav;
