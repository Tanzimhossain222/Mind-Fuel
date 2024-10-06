"use client";

import { emptyCart } from "@/assets/images";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hooks";
import { resetCart } from "@/redux/product";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";

// Utility function to calculate shipping charges
const calculateShippingCharge = (totalAmt: number) => {
  if (totalAmt <= 200) return 30;
  if (totalAmt <= 400) return 25;
  return 20;
};

const CartDetails = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.cart);

  const [totalAmt, setTotalAmt] = useState<number>(0);
  const [shippingCharge, setShippingCharge] = useState<number>(0);

  const handleResetCart = () => {
    dispatch(resetCart());
    setTotalAmt(0);
    setShippingCharge(0);
  };

  // Calculate the total amount based on cart products
  useEffect(() => {
    const price = products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmt(price);
    setShippingCharge(calculateShippingCharge(price));
  }, [products]);

  const CartSummary = () => (
    <div className="max-w-7xl gap-4 flex justify-end mt-4">
      <div className="w-96 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
        <div>
          {["Subtotal", "Shipping Charge", "Total"].map((label, index) => (
            <p
              key={label}
              className={`flex items-center justify-between border-[1px] border-gray-400 ${
                index !== 2 ? "border-b-0" : ""
              } py-1.5 text-lg px-4 font-medium`}
            >
              {label}
              <span
                className={`${
                  label === "Total" ? "font-bold" : "font-semibold"
                } tracking-wide text-lg font-titleFont`}
              >
                ৳
                {label === "Subtotal"
                  ? totalAmt
                  : label === "Shipping Charge"
                  ? shippingCharge
                  : totalAmt + shippingCharge}
              </span>
            </p>
          ))}
        </div>

        <CheckoutButton />
      </div>
    </div>
  );

  return (
    <div>
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>

          <button
            onClick={handleResetCart}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center gap-4">
              <input
                className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                type="text"
                placeholder="Coupon Number"
              />
              <p className="text-sm mdl:text-base font-semibold">
                Apply Coupon
              </p>
            </div>
            <p className="text-lg font-semibold">Update Cart</p>
          </div>

          <CartSummary />
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <Image
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart.src}
              alt="Empty Cart"
              width={300}
              height={300}
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link href="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CartDetails;

