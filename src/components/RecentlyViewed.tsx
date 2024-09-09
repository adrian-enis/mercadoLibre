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
  console.log(dbRecentViewed);
  return (
    <div className="bg-red-300 p-4 flex">
      {dbRecentViewed.map((recentPrev) => (
        <article
          className="bg-white  flex flex-col items-center max-w-[180px] w-full rounded-lg mr-5"
          key={recentPrev.id}
        >
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow "
          ></button>
          <p className="mt-5 text-lg">Visto Recientemente...</p>
          <div className="w-full flex justify-center">
            <img
              src={`/imagenes/${recentPrev.image}.webp`}
              alt=""
              className="w-[66%] h-auto"
            />
          </div>
          <div className="mb-2">
            <p>US$ 25</p>
            <p>Envio gratis</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default RecentlyViewed;
