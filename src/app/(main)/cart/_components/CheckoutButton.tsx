"use client";

import { useAuth } from "@/hooks/auth.hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CheckoutButton = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  return (
    <div className="flex justify-end">
      <Link href={isAuthenticated ? "/paymentgateway" : "/paymentgateway"}>
        <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default CheckoutButton;

