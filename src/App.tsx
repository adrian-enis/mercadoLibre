import React from "react";
import Header from "./components/Header";
import { useMartketPlace } from "./hooks/useMarketPlace";
import Carrousel from "./components/Carrousel";
import HamburgerMenu from "./components/HamburgerMenu";
import RecentlyViewed from "./components/RecentlyViewed";

const App = () => {
  const {
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
  } = useMartketPlace();

  return (
    <div className="bg-gray-500 min-h-screen ">

      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {menuOpen && <HamburgerMenu data={data} setData={setData} />}
      <Carrousel
        dbPromo={dbPromo}
        setDbPromo={setDbPromo}
        currentIndex={promoIndex}
      
        nextImage={nextPromoImage}
        prevImage={prevPromoImage}
      />

      {/* <div className="bg-gradient-to-t from-white to-slate-400 h-40 opacity-50 filter blur-lg"></div> */}

      <RecentlyViewed dbRecentViewed={dbRecentViewed} currentIndex={viewedIndex} nextImage={nextViewedImage} prevImage={prevViewedImage}/>
    </div>
  );
};

export default App;
