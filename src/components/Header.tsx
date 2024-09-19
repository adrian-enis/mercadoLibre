import React, { useState } from "react";

import mercadoLogo from "/imagenes/mercadolibre.svg";


type HeaderProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

const Header = ({ menuOpen, toggleMenu }: HeaderProps) => {
  // const [searchItem, setSearchItem] = useState("");
  // const [filteredProduct, setFilteredProduct] = useState([]);
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   const term = event.target.value;
  //   setSearchItem(term);
  //   if(term){
  //     const filtered = products.filter(product =>
  //        product.name.toLowerCase().includes(term.toLowerCase()));
  //        setFilteredProduct(filtered)
  //   }else{
  //     setFilteredProduct(products)
  //   }
  // }
  return (
    <div className="relative">
      <div className=" bg-yellow-300 flex items-center justify-around md:flex-row-reverse p-5 ">
        <button
          className={`hamburger hamburger--collapse  ${
            menuOpen ? "is-active" : ""
          }`}
          onClick={toggleMenu}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className="max-w-[1200px] w-full ">
          <input
            className="w-full md:w-3/4 lg:w-2/3 pl-4 p-3 rounded-lg md:p-4 lg:p-5 transition-all duration-300"
            type="search"
            placeholder="Buscar producto..."
          />
        </div>
  
        <button>
          <a href="#">
            <img
              src={mercadoLogo}
              className="h-20 hidden md:block md:mr-20"
              alt=""
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
