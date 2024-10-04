"use client";

import { useAppDispatch } from "@/hooks/redux.hooks";
import { ProductsList } from "@/interface";
import { addToCart, addToWishlist } from "@/redux/product";
import { urlGenerate } from "@/utils/urlGenerate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";

type ProductCardProps = ProductsList;

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    image,
    price,
    _id,
    description,
    originalPrice,
    salePrice,
    sku,
    tags,
    title,
    weight,
  } = props;

  const dispatch = useAppDispatch();
  const router = useRouter();
  const rootId = urlGenerate(title, _id);

  // Reusable handler for dispatching actions
  const handleAction = (action: "cart" | "wishlist") => {
    const productData = {
      _id,
      price: Number(price),
      image,
      description,
      originalPrice: Number(originalPrice),
      salePrice: Number(salePrice),
      sku,
      tags,
      weight,
      quantity: 1,
      title,
    };
    
    if (action === "cart") {
      dispatch(addToCart(productData));
      console.log("Add to cart:", title);
    } else if (action === "wishlist") {
      dispatch(addToWishlist(productData));
    }
  };

  // Navigate to product details page
  const handleProductDetails = () => {
    router.push(`/product/${rootId}`);
  };

  // Reusable function to render action list items
  const renderActionItem = (label: string, Icon: React.ReactNode, onClick: () => void) => (
    <li
      onClick={onClick}
      className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 cursor-pointer pb-1 duration-300 w-full"
    >
      {label} {Icon}
    </li>
  );

  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden">
        <Image
          className="w-full h-full"
          src={image}
          height={500}
          width={500}
          alt={title}
        />

        {/* Product actions that appear on hover */}
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            {renderActionItem("Add to Cart", <FaShoppingCart />, () => handleAction("cart"))}
            {renderActionItem("View Details", <MdOutlineLabelImportant />, handleProductDetails)}
            {renderActionItem("Add to Wish List", <BsSuitHeartFill />, () => handleAction("wishlist"))}
          </ul>
        </div>
      </div>

      {/* Product information */}
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">{title}</h2>
          <p className="text-[#767676] text-[14px]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
