import React from "react";

interface PropsI {
  navCollapsed?: boolean;
  mobileNav?: boolean;
  isMobile?: boolean;
  toggleCollapsedNav?: () => void;
  toggleMobileNav?: () => void;
}

const SideNav = (props: PropsI) => {
  return <div className="header-nav-wrapper">SideBar</div>;
};

export default SideNav;
