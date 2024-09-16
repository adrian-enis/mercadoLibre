import { useState } from "react";
import { HamburgerMenus, Promotions, Viewed } from "../types";
import { db } from "../data/db";
import { promotions } from "../data/promotionDb";
import { dbViewed } from "../data/dbViewed";
import useCarrousel from "./useCarrousel";
export const useMartketPlace = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const [data, setData] = useState<HamburgerMenus[]>(db);

    const {
      items: dbPromo,
      currentIndex: promoIndex,
      nextImage: nextPromoImage,
      prevImage: prevPromoImage,
      setItems: setDbPromo,
  } = useCarrousel<Promotions>(promotions);

  const {
      items: dbRecentViewed,
      currentIndex: viewedIndex,
      nextImage: nextViewedImage,
      prevImage: prevViewedImage,
      setItems: setDbRecentViewed,
  } = useCarrousel<Viewed>(dbViewed);

    return{
      menuOpen,
        setMenuOpen,
        toggleMenu,
        data,
        setData,
        dbPromo,
        setDbPromo,
        promoIndex,
        nextPromoImage,
        prevPromoImage,
        dbRecentViewed,
        setDbRecentViewed,
        viewedIndex,
        nextViewedImage,
        prevViewedImage,

    }
}
