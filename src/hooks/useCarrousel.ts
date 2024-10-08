import { useState } from "react";
import { promotions } from "../data/promotionDb";

import { Product, Promotions } from "../types";


const useCarrousel = <T,>(initialState: T[]) => {


  const [dbPromo, setDbPromo] = useState<Promotions[]>(promotions);

  const [dbRecentViewed, setDbRecentViewed] = useState<Product[]>();
  const [items, setItems] = useState<T[]>(initialState);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };


  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  

  return {
    items,
    setItems,
    nextImage,
    prevImage,
    currentIndex,
    setCurrentIndex,
    dbPromo,
    setDbPromo,
    dbRecentViewed,
    setDbRecentViewed,
  };
};

export default useCarrousel;
