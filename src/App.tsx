import React from "react";
import Header from "./components/Header";
import { useMartketPlace } from "./hooks/useMarketPlace";
import Carrousel from "./components/Carrousel";
import HamburgerMenu from "./components/HamburgerMenu";
import RecentlyViewed from "./components/RecentlyViewed";
const App = () => {
  const { menuOpen, setMenuOpen, toggleMenu, data, setData, dbPromo, setDbPromo, currentIndex, setCurrentIndex, nextImage, prevImage } =
    useMartketPlace();
  return (
    <div className="bg-gray-500 min-h-screen ">
      {/* {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )} */}
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {menuOpen && <HamburgerMenu data={data} setData={setData} />}
      <Carrousel dbPromo={dbPromo} setDbPromo={setDbPromo} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} nextImage={nextImage} prevImage={prevImage} />
      {/* <div className="bg-gradient-to-t bg-red-500 h-40 opacity-5"></div> */}
      <div className="bg-gradient-to-t from-white to-slate-400 h-40 opacity-50 filter blur-lg">

      </div>
        <RecentlyViewed/>
    </div>
  );
};

export default App;
