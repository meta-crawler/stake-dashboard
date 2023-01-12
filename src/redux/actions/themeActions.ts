import { TOGGLE_MOBILE_NAV, TOGGLE_COLLAPSED_NAV } from "../types";

export const toggleCollapsedNav = (navCollapsed: boolean) => {
  return {
    type: TOGGLE_COLLAPSED_NAV,
    payload: navCollapsed,
  };
};

export const toggleMobileNav = (mobileNav: boolean) => {
  return {
    type: TOGGLE_MOBILE_NAV,
    payload: mobileNav,
  };
};
