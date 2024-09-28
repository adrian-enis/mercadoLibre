import React from "react";
import Header from "./components/Header";
import { useMartketPlace } from "./hooks/useMarketPlace";
import Carrousel from "./components/Carrousel";
import HamburgerMenu from "./components/HamburgerMenu";
import RecentlyViewed from "./components/RecentlyViewed";
import { StoreProduct } from "./components/StoreProduct";
import useRequestProduct from "./apis/productApi";

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
  const {product, error} = useRequestProduct()

  return (
    <div className="bg-gray-200 min-h-screen ">

      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {menuOpen && <HamburgerMenu data={data} setData={setData} />}
      <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300"></div>
      <Carrousel
        dbPromo={dbPromo}
        setDbPromo={setDbPromo}
        currentIndex={promoIndex}
      
        nextImage={nextPromoImage}
        prevImage={prevPromoImage}
      />
      </div>

    
      <StoreProduct product={product}  error={error}/>


      <RecentlyViewed dbRecentViewed={dbRecentViewed} currentIndex={viewedIndex} nextImage={nextViewedImage} prevImage={prevViewedImage}/>
    </div>
  );
};

export default App;
