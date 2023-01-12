import React from "react";
import HeaderNav from "components/layouts/HeaderNav";
import SideNav from "components/layouts/SideNav";
import { useAppDispatch, useAppSelector } from "hooks";
import { toggleCollapsedNav as toggleCollapsedNavAction } from "redux/actions";

const Views = () => {
  const { navCollapsed } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const toggleCollapsedNav = () => {
    dispatch(toggleCollapsedNavAction(!navCollapsed));
  };

  return (
    <div className="view-wrapper">
      <HeaderNav
        navCollapsed={navCollapsed}
        toggleCollapsedNav={toggleCollapsedNav}
      />
      <SideNav
        navCollapsed={navCollapsed}
        toggleCollapsedNav={toggleCollapsedNav}
      />
    </div>
  );
};

export default Views;
