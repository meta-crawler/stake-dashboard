import { TOGGLE_MOBILE_NAV, TOGGLE_COLLAPSED_NAV } from "../types";

export interface ThemeStateI {
  navCollapsed: boolean;
  mobileNav: boolean;
}

const initThemeState: ThemeStateI = {
  navCollapsed: false,
  mobileNav: false,
};

const themeReducer = (
  state: ThemeStateI = initThemeState,
  action: any
): ThemeStateI => {
  switch (action.type) {
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.payload,
      };
    case TOGGLE_MOBILE_NAV:
      return {
        ...state,
        mobileNav: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
