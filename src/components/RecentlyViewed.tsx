import React from "react";

import { HamburgerMenus } from "../types";
type RecentlyViewedProps = {
  dbRecentViewed: HamburgerMenus[];
  currentIndex: number;
  nextImage: () => void;
  prevImage: () => void;
};
const RecentlyViewed = ({
  dbRecentViewed,
  currentIndex,
  nextImage,
  prevImage,
}: RecentlyViewedProps) => {
  const visibleItems = dbRecentViewed.slice(currentIndex, currentIndex + 3);

  return (
    <div
      className={`bg-red-300 p-4 flex md:justify-center gap-3 md:gap-5 lg:gap-7 h-[250px] relative overflow-hidden`}
    >
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow md:w-[50px] "
      >
        &lt;
      </button>
      {visibleItems.map((items) => (
        <button>
          <article
            className="bg-white rounded-lg p-5 w-[150px] "
            key={items.id}
          >
            <p className=" text-ellipsis whitespace-nowrap overflow-hidden">
              Visto Recientemente...
            </p>
            <div className="w-full h-20 mt-1">
              <img
                src={`/imagenes/${items.image}.webp`}
                alt=""
                className="object-contain w-full h-full "
              />
            </div>
            <div className="mt-5">
              <p className="text-xl">US$ 25</p>
              <p className=" text-green-500 font-medium">Envio gratis</p>
            </div>
          </article>
        </button>
      ))}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow md:w-[50px]"
      >
        &gt;
      </button>
    </div>
  );
};

export default RecentlyViewed;
