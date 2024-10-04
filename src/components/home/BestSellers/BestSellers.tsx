import { ProductsList } from "@/interface";
import React from "react";
import Heading from "../Products/Heading";

import ProductCard from "@/components/product/ProductCards";
interface ProductProps {
  productsData: ProductsList[];
}

const BestSellers: React.FC<ProductProps> = ({ productsData }) => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {productsData &&
          productsData.length > 0 &&
          productsData.map((product) => (
            <div className="px-2" key={product._id}>
              <ProductCard {...product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSellers;
