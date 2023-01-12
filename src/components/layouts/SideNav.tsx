import React from "react";
import { BiFootball } from "react-icons/bi";
import { CgCardHearts } from "react-icons/cg";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import navigationConfig from "configs/NavigationConfig";

interface PropsI {
  navCollapsed?: boolean;
  mobileNav?: boolean;
  isMobile?: boolean;
  toggleCollapsedNav?: () => void;
  toggleMobileNav?: () => void;
}

const SideNav = (props: PropsI) => {
  const { navCollapsed, toggleCollapsedNav } = props;

  return (
    <div
      className={`flex flex-col bg-user-500 ${
        navCollapsed ? "w-[250px]" : "w-[80px]"
      }`}
    >
      {navCollapsed ? (
        <div className="flex flex-row items-center justify-between h-16 pl-6 pr-10 shadow-lg">
          <button
            type="button"
            className="flex flex-row items-center py-2 px-3 bg-user-400 hover:bg-user-600/30 w-max rounded-full"
          >
            <CgCardHearts style={{ color: "white" }} />
            <span className="ml-2 text-white text-sm">Casino</span>
          </button>
          <button
            type="button"
            className="flex flex-row items-center py-2 px-3 bg-user-400 hover:bg-user-600/30 w-max rounded-full"
          >
            <BiFootball style={{ color: "white" }} />
            <span className="ml-2 text-white text-sm">Sports</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center h-16 shadow-lg">
          <button
            type="button"
            className="flex flex-row h-[30px] w-[40px] items-center justify-center rounded-[15px] bg-transparent hover:bg-user-200/90 focus:outline-none"
            onClick={toggleCollapsedNav}
          >
            <AiOutlineMenuUnfold style={{ color: "white" }} />
          </button>
        </div>
      )}
      <aside className="w-full" aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto h-[calc(100vh_-_64px)]">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-user-200/90 ${
                  !navCollapsed && "justify-center"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className={`ml-3 ${!navCollapsed && "hidden"}`}>
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-user-200/90 ${
                  !navCollapsed && "justify-center"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span
                  className={`flex-1 ml-3 whitespace-nowrap ${
                    !navCollapsed && "hidden"
                  }`}
                >
                  Kanban
                </span>
                <span
                  className={`inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 ${
                    !navCollapsed && "hidden"
                  }`}
                >
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-user-200/90 ${
                  !navCollapsed && "justify-center"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  className={`flex-1 ml-3 whitespace-nowrap ${
                    !navCollapsed && "hidden"
                  }`}
                >
                  Users
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-user-200/90 ${
                  !navCollapsed && "justify-center"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  className={`flex-1 ml-3 whitespace-nowrap ${
                    !navCollapsed && "hidden"
                  }`}
                >
                  Products
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-user-200/90 ${
                  !navCollapsed && "justify-center"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  className={`flex-1 ml-3 whitespace-nowrap ${
                    !navCollapsed && "hidden"
                  }`}
                >
                  Sign In
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-user-200/90 ${
                  !navCollapsed && "justify-center"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  className={`flex-1 ml-3 whitespace-nowrap ${
                    !navCollapsed && "hidden"
                  }`}
                >
                  Sign Up
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
