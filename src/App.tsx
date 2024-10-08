import React from "react";
import Header from "./components/Header";
import { useMarketPlace } from "./hooks/useMarketPlace";
import Carrousel from "./components/Carrousel";
import HamburgerMenu from "./components/HamburgerMenu";
import RecentlyViewed from "./components/RecentlyViewed";
import { StoreProduct } from "./components/StoreProduct";
import useFilteredProduct from "./hooks/useFilteredProduct";

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
  } = useMarketPlace();

  const {
    product,
    error, 
    searchItem, 
    setSearchItem, 
    filteredProduct, 
    setFilteredProduct,
    handleSearchChange,
  } = useFilteredProduct()

  return (
    <div className="bg-gray-200 min-h-screen ">

      <Header menuOpen={menuOpen} toggleMenu={toggleMenu}  searchItem={searchItem} handleSearchChange={handleSearchChange}/>
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

    
      <StoreProduct product={filteredProduct}  error={error}/>


      <RecentlyViewed
       dbRecentViewed={dbRecentViewed} setDbRecentViewed={setDbRecentViewed} 
        currentIndex={viewedIndex} nextImage={nextViewedImage} prevImage={prevViewedImage}
         filteredProduct={filteredProduct} />
    </div>
  );
};

export default App;

