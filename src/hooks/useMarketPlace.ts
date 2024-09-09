import { useState } from "react";
import { HamburgerMenus, Promotions, Viewed } from "../types";
import { db } from "../data/db";
import { promotions } from "../data/promotionDb";
import { dbViewed } from "../data/dbViewed";
export const useMartketPlace = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const [data, setData] = useState<HamburgerMenus[]>(db);

    const [dbPromo, setDbPromo] = useState<Promotions[]>(promotions);

    const [dbRecentViewed, setDbRecentViewed] = useState<Viewed[]>(dbViewed)
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dbPromo.length);
    };
  
    const prevImage = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + dbPromo.length) % dbPromo.length
      );
    };


  

    return{
        menuOpen,
        setMenuOpen,
        toggleMenu,
        data,
        setData,
        dbPromo,
        setDbPromo,
        currentIndex,
        setCurrentIndex,
        nextImage,
        prevImage,
        dbRecentViewed,
        setDbRecentViewed,

    }
}
