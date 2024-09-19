import React, { useState } from "react";


import { Promotions } from "../types";

type CarrouselProps = {
  dbPromo: Promotions[];
  setDbPromo: React.Dispatch<React.SetStateAction<Promotions[]>>;
  currentIndex: number;

  nextImage: () => void;
  prevImage: () => void;

}

const Carrousel = ({dbPromo, currentIndex,  nextImage, prevImage}:CarrouselProps) => {
 
console.log(currentIndex)
  return (
    <div className="bg-slate-700  w-full relative z-30">
      {dbPromo.length > 0 && (
        <article className="">
          <img
            src={`/imagenes/${dbPromo[currentIndex].image}.webp`}
            className=" w-full"
            alt={`Descripción de imagen ${currentIndex + 1}`}
          />
        </article>
      )}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow md:w-[50px] "
        disabled={dbPromo.length === 0}
      >
        &lt;
      </button>

      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow md:w-[50px]"
        disabled={dbPromo.length === 0}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carrousel;
