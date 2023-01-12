import { AiOutlineStar, AiFillGift, AiOutlineSkin } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { BiFootball } from "react-icons/bi";

import { APP_PREFIX_PATH } from "./AppConfig";
import { IconType } from "react-icons";

export interface NavConfigI {
  key: string;
  path: string;
  title: string;
  icon?: IconType;
  submenu?: Array<NavConfigI>;
}

const dashBoardNavTree: Array<NavConfigI> = [
  {
    key: "casino",
    path: `${APP_PREFIX_PATH}/casino`,
    title: "sidenav.casino",
    submenu: [
      {
        key: "favourites",
        path: `${APP_PREFIX_PATH}/casino/favourites`,
        title: "sidenav.casino.favourites",
        icon: AiOutlineStar,
      },
      {
        key: "recent",
        path: `${APP_PREFIX_PATH}/casino/recent`,
        title: "sidenav.casino.recent",
        icon: MdHistory,
      },
    ],
  },
  {
    key: "sports",
    path: `${APP_PREFIX_PATH}/sports`,
    title: "sidenav.sports",
    submenu: [
      {
        key: "football",
        path: `${APP_PREFIX_PATH}/sports/football`,
        title: "sidenav.sports.football",
        icon: BiFootball,
      },
    ],
  },
  {
    key: "promotions",
    path: `${APP_PREFIX_PATH}/promotions`,
    title: "sidenav.promotions",
    submenu: [
      {
        key: "viewall",
        path: `${APP_PREFIX_PATH}/promotions/viewall`,
        title: "sidenav.promotions.viewall",
        icon: AiFillGift,
      },
    ],
  },
  {
    key: "sponsorships",
    path: `${APP_PREFIX_PATH}/sponsorships`,
    title: "sidenav.sponsorships",
    submenu: [
      {
        key: "drake",
        path: `${APP_PREFIX_PATH}/sponsorships/drake`,
        title: "sidenav.sponsorships.drake",
        icon: AiOutlineSkin,
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
