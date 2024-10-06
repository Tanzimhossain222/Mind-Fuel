"use client";

import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { paginationItems } from "../../../constants";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
      <input
        className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Search your products here"
      />
      <FaSearch className="w-5 h-5" />
      {searchQuery && (
        <div className="w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer">
          {filteredProducts.map((item) => (
            <div
              onClick={() => {
                router.push({
                  pathname: `/product/${item.productName.toLowerCase().split(" ").join("")}`,
                  query: { item: JSON.stringify(item) },
                });
                setSearchQuery("");
              }}
              key={item._id}
              className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
            >
              <img className="w-24" src={item.img} alt="productImg" />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg">{item.productName}</p>
                <p className="text-xs">{item.des}</p>
                <p className="text-sm">
                  Price:{" "}
                  <span className="text-primeColor font-semibold">${item.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
