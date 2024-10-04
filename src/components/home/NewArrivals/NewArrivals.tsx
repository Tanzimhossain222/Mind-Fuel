"use client";

import ProductCard from "@/components/product/ProductCards";
import { ProductsList } from "@/interface";
import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

interface ProductProps {
  productsData: ProductsList[];
}

const NewArrivals: React.FC<ProductProps> = ({ productsData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {productsData &&
          productsData.length > 0 &&
          productsData.map((product) => (
            <div className="px-2" key={product._id}>
              <ProductCard {...product} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
