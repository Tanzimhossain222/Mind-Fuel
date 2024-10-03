"use client";

import { useAppDispatch, useAppSelector,useAppStore } from "@/hooks/redux.hooks";

const ProductInfo = ({ productInfo }) => {
  // const dispatch = useDispatch();
console.log("useAppSelector", useAppSelector);
console.log("useAppStore", useAppStore);
console.log("useAppDispatch", useAppDispatch);




  const dispatch = () => {};

  const addToCart = () => {};

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo?.title}</h2>
      <p className="text-xl font-semibold">
        ৳{productInfo?.variants[0]?.price}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: `<p className="text-base text-gray-600">${productInfo?.body_html}</p>`,
        }}
      ></div>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Stock:</span>{" "}
        {productInfo?.variants[0]?.inventory_quantity > 0 ? (
          <span className="text-green-500">In stock</span>
        ) : (
          <span className="text-red-500">Out of stock</span>
        )}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo?.id,
              name: productInfo?.productName,
              quantity: 1,
              image: productInfo?.img,
              badge: productInfo?.badge,
              price: productInfo?.price,
              colors: productInfo?.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      {/* <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p> */}
    </div>
  );
};

export default ProductInfo;
