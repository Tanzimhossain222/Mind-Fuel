"use client";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const CategoryMenu = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      onClick={() => setShow(!show)}
      ref={ref}
      className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
    >
      <HiOutlineMenuAlt4 className="w-5 h-5" />
      <p className="text-[14px] font-normal">Shop by Category</p>
      {show && (
        <motion.ul
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
        >
          <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
            Accessories
          </li>
          {/* Add more categories as needed */}
        </motion.ul>
      )}
    </div>
  );
};

export default CategoryMenu;
