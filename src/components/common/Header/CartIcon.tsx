"use client";

import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useAppSelector } from "@/hooks/redux.hooks";

const CartIcon = () => {
  const products = useAppSelector((state) => state.products.cart);

  return (
    <Link href="/cart">
      <div className="relative cursor-pointer">
        <FaShoppingCart />
        <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
          {products.length > 0 ? products.length : 0}
        </span>
      </div>
    </Link>
  );
};

export default CartIcon;
