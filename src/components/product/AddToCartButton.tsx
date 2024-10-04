"use client";

import { useAppDispatch } from "@/hooks/redux.hooks";
import { IProduct } from "@/interface";
import { addToCart } from "@/redux/product";
import React from "react";

interface Props {
  productInfo: IProduct;
  className: string;
  children: React.ReactNode;
}

const AddToCartButton = ({ className, children, productInfo }: Props) => {
  const dispatch = useAppDispatch();

  const {
    _id,
    price,
    title,
    image,
    description,
    originalPrice,
    salePrice,
    sku,
    tags,
    weight,
  } = productInfo;

  const handleClick = () => {
    dispatch(
      addToCart({
        _id,
        quantity: 1,
        price: Number(price),
        title,
        image,
        description,
        originalPrice: Number(originalPrice),
        salePrice: Number(salePrice),
        sku: sku || "",
        tags: tags || "",
        weight: Number(weight),
      })
    );
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default AddToCartButton;

