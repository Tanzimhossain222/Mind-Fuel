import AddToCartButton from "@/components/product/AddToCartButton";
import { IProduct } from "@/interface";

interface ProductInfoProps {
  productInfo: IProduct;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productInfo }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo?.title}</h2>
      <p className="text-xl font-semibold">
        ৳{productInfo?.price}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: `<p className="text-base text-gray-600">${productInfo?.description}</p>`,
        }}
      ></div>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Stock:</span>{" "}
        {productInfo?.quantity > 0 ? (
          <span className="text-green-500">In stock</span>
        ) : (
          <span className="text-red-500">Out of stock</span>
        )}
      </p>

      <AddToCartButton
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
        productInfo={productInfo}
      >
        Add to Cart
      </AddToCartButton>
    </div>
  );
};

export default ProductInfo;
