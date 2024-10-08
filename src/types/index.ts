
export type HamburgerMenus = {
  id: number;
  name: string;
  image: string;  
}


export type Promotions = Omit<HamburgerMenus, "name"> 



export type Product = {
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
}

export type ErrorState = {
  hasError: boolean;
  message: string;
}