import { HamburgerMenus } from "../types";
import {generateId} from "../helpers/helpers"

export const db: HamburgerMenus[] = [
  {
    id:generateId(),
    name:"home",
    image:"house_01",
  },
  {
    id:generateId(),
    name:"search",
    image:"search_02",
  },
  {
    id:generateId(),
    name:"bell",
    image:"bell_03",
  },
  {
    id:generateId(),
    name:"bag",
    image:"bag_04",
  },
  {
    id:generateId(),
    name:"heart",
    image:"heart_05",
  },
  {
    id:generateId(),
    name:"percent",
    image:"percent_06",
  },
  {
    id:generateId(),
    name:"clock",
    image:"clock_07",
  },
  {
    id:generateId(),
    name:"headset",
    image:"headset_08",
  },
]