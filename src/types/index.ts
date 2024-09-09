
export type HamburgerMenus = {
  id: number;
  name: string;
  image: string;  
}


export type Promotions = Omit<HamburgerMenus, "name"> 

export type Viewed = HamburgerMenus
