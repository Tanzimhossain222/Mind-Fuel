import { logoLight } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import React from "react";

const LoginLeftSide = () => {
  return (
    <>
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link href="/">
            <Image
              src={logoLight.src}
              alt="MINDFUEL Logo"
              className="w-28"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Welcome Back to MINDFUEL
            </h1>
            <p className="text-base">Sign in to continue your wellness journey with us.</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Stay Connected with MINDFUEL
              </span>
              <br />
              Keep track of your orders, discover personalized health tips, and access exclusive offers on our premium organic products.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Health at Your Fingertips
              </span>
              <br />
              Easily manage your account, get recommendations on the best products for your health, and explore new wellness solutions.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by Health Enthusiasts
              </span>
              <br />
              Thousands of customers rely on MINDFUEL for their healthy living goals—join them by signing in now.
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link href="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                © MINDFUEL
              </p>
            </Link>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLeftSide;