import React from "react";
import { ErrorState, Product } from "../types";
type storeProductProps = {
  product: Product[];
  error: ErrorState;
};

export const StoreProduct = ({ product, error }: storeProductProps) => {

  return (
    <div className=" container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Store Product</h2>
      {error.hasError && (
        <div className=" bg-red-500 text-white p-4 mb-4">{error.message}</div>
      )}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((item) => (
          <button key={item.id}>
            <article  className="bg-white  rounded-lg p-3 ">
              <figure className="w-full h-48 shadow-md overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-contain p-3 transition-transform duration-500 hover:scale-125"
                  alt=""
                />
              </figure>
              <div className="p-4 mb-5">
                <p className="text-gray-800 text-lg truncate mb-3">
                  {item.description}
                </p>
                <p className="text-2xl font-semibold">{item.price}$</p>
                <span className="text-green-600 text-lg font-medium">
                  Envio gratis
                </span>
              </div>
            </article>
          </button>
        ))}
      </div>
    </div>
  );
};
