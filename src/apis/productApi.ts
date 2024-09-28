import { useState, useEffect } from 'react'
import { Product, ErrorState } from '../types';


const useRequestProduct = () => {

    const [product, setProduct] = useState<Product[]>([]);
    const [error, setError] = useState<ErrorState>({hasError:false, message:""})
    useEffect(() => {
        const fetchProduct =  async () => { 
            
            try{
                const res = await fetch("https://fakestoreapi.com/products");
                if(!res.ok){
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                const data = <Product[]> await res.json();
                setProduct(data)

            }catch(err){
                if(err instanceof Error){
                    setError({hasError:true, message:error.message})
                }else {
                    setError({hasError: true, message:"An unknown error ocurred"})
                }
            }
        }
        fetchProduct();
    }, [])

    return {product, error}
}

export default useRequestProduct;