import React from "react";

interface PropsI {
  navCollapsed?: boolean;
  mobileNav?: boolean;
  isMobile?: boolean;
  toggleCollapsedNav?: () => void;
  toggleMobileNav?: () => void;
}

const HeaderNav = (props: PropsI) => {
  return <div className="header-nav-wrapper">Header</div>;
};

export default HeaderNav;
