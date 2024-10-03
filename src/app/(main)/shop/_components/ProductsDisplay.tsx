"use client";

import Pagination from "@/components/pageProps/shopPage/Pagination";
import ProductBanner from "@/components/pageProps/shopPage/ProductBanner";
import { useState } from "react";

const ProductsDisplay = ({products}) => {

  const [itemsPerPage, setItemsPerPage] = useState(12);
  
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

console.log(products);

  return (
    <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
    <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
    <Pagination itemsPerPage={itemsPerPage} products={products}  />
  </div>
  )
}

export default ProductsDisplay