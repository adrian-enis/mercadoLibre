import React from "react";
import { HamburgerMenus } from "../types";
type RecentlyViewedProps = {
  dbRecentViewed: HamburgerMenus[];
  currentIndex: number;
  nextImage: () => void;
  prevImage: () => void;
};
const RecentlyViewed = ({dbRecentViewed,currentIndex,nextImage,prevImage,}: RecentlyViewedProps) => {
  const visibleItems = dbRecentViewed.slice(currentIndex, currentIndex + 5);

  return (
    <div className="bg-red-300 p-4 flex h-[320px]">
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow "
          >
            &lt;
          </button>
      {visibleItems.map((items) => (
        <article
          className="bg-white  flex flex-col flex-wrap items-center max-w-[170px] w-full rounded-lg mr-5 "
          key={items.id}
        >
          <p className="mt-5 text-lg text-center ">Visto Recientemente...</p>
          <div className="flex justify-center w-full h-[150px]">
            <img
              src={`/imagenes/${items.image}.webp`}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="mb-2 ">
            <p className="text-xl">US$ 25</p>
            <p className=" text-green-500 font-medium">Envio gratis</p>
          </div>
        </article>
      ))}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
          >
            &gt;
          </button>
    </div>
  );
};

export default RecentlyViewed;
