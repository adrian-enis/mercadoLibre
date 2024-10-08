import { useState, useEffect } from 'react';
import useRequestProduct from '../apis/productApi';
import { Product } from '../types';

import React from 'react'

const useFilteredProduct = () => {
    const {product, error} = useRequestProduct()
    const [searchItem, setSearchItem] = useState("");
    const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);

    useEffect(() => {
      setFilteredProduct(product);
    }, [product]);
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      setSearchItem(term);
      if (term) {
        const filtered = product.filter((p) =>
          p.title.toLowerCase().includes(term.toLowerCase())  
        );
        setFilteredProduct(filtered);
      } else {
        setFilteredProduct(product);
      }
    };
  return {
    product,error, searchItem, setSearchItem, filteredProduct, setFilteredProduct, handleSearchChange
  }
}

export default useFilteredProduct