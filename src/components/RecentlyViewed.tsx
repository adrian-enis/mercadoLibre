

import React, { useEffect, useState } from "react";
import { Product } from "../types";
import useRequestProduct from "../apis/productApi";

type RecentlyViewedProps = {
  currentIndex: number;
  nextImage: () => void;
  prevImage: () => void;
  filteredProduct: Product[];
  dbRecentViewed: Product[];
  setDbRecentViewed: React.Dispatch<React.SetStateAction<Product[]>>

};

const RecentlyViewed = ({ currentIndex, filteredProduct, nextImage, prevImage , dbRecentViewed, setDbRecentViewed}: RecentlyViewedProps) => {

  const { product } = useRequestProduct();
  
  useEffect(() => {
    if (filteredProduct.length > 0) {

      const updateProduct = [...filteredProduct, ...product].slice(0, 5);

      setDbRecentViewed(updateProduct);

    } else {

      setDbRecentViewed(product.slice(currentIndex, currentIndex + 5));
    }
    
  }, [filteredProduct, currentIndex,]);




  return (
    <div className="bg-red-300 p-4 flex md:justify-center gap-3 md:gap-5 lg:gap-7 h-[250px] relative overflow-hidden">
      <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow md:w-[50px] lg:hidden">
        &lt;
      </button>
      {dbRecentViewed.map((item) => (
        <button key={item.id}>
          <article className="bg-white rounded-lg p-5 w-[150px]">
            <p className="text-ellipsis whitespace-nowrap overflow-hidden">Visto Recientemente...</p>
            <div className="w-full h-20 mt-1">
              <img src={item.image} alt="" className="object-contain w-full h-full" />
            </div>
            <div className="mt-5">
              <p className="text-xl">{item.price}$</p>
              <p className="text-green-500 font-medium">Envio gratis</p>
            </div>
          </article>
        </button>
      ))}
      <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow md:w-[50px] lg:hidden">
        &gt;
      </button>
    </div>
  );  
};

export default RecentlyViewed;

