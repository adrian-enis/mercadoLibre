import React, { useState } from "react";
import personCircleIcon from "/imagenes/person-circle.svg"; // Importa el icono SVG

import { HamburgerMenus } from "../types";


type DataProps = {
  data: HamburgerMenus[],
  setData: React.Dispatch<React.SetStateAction<HamburgerMenus[]>>
}
const HamburgerMenu = ({data, setData}:DataProps) => {


  return (
    <div className=" bg-white shadow-lg absolute z-40  w-full">
      <div className={`flex items-center bg-yellow-300 w-full  gap-2 p-4   `}>
        <img
          src={personCircleIcon}
          className="h-9 md:ml-8 md:h-12"
          alt="Person Icon"
        />
        <p className="text-xl">Hola!</p>
      </div>
      {data.map((dataprev) => (
        <button
          type="button"
          className="flex p-4 gap-2 md:ml-8 "
          key={dataprev.id}
        >
          <a href="#" className="flex gap-2 ">
            <img
              src={`/imagenes/${dataprev.image}.svg`}
              className="h-6 md:h-8"
              alt="icon"
            />
            <p className=" text-base md:text-xl">{dataprev.name}</p>
          </a>
        </button>
      ))}
    </div>
  );
};

export default HamburgerMenu;
