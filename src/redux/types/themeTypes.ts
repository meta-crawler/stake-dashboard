export const TOGGLE_COLLAPSED_NAV = "TOGGLE_COLLAPSED_NAV";
export const TOGGLE_MOBILE_NAV = "TOGGLE_MOBILE_NAV";

interface ToggleCollapsed {
  type: typeof TOGGLE_COLLAPSED_NAV;
  payload: boolean;
}

interface ToggleMobile {
  type: typeof TOGGLE_MOBILE_NAV;
  payload: boolean;
}

export type ThemeDispatchType = ToggleCollapsed | ToggleMobile;
