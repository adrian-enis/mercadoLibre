import { useState } from "react";
import { HamburgerMenus, Product, Promotions } from "../types";
import { db } from "../data/db";

import { promotions } from "../data/promotionDb";
import useRequestProduct from "../apis/productApi";
import useFilteredProduct from "./useFilteredProduct";
import useCarrousel from "./useCarrousel";
export const useMarketPlace = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
    const { filteredProduct } = useFilteredProduct();
    const { product } = useRequestProduct();

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
  } = useCarrousel<Product>(filteredProduct || [] );

  return {
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
    filteredProduct,
    dbRecentViewed,
    setDbRecentViewed,
    viewedIndex,
    nextViewedImage,
    prevViewedImage,
  };
};
