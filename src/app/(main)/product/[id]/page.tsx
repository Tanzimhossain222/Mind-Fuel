import { getProductById } from "@/lib/getProduct";
import ProductDetails from "../_components/productDetails/ProductDetails";
import { sanitizeProductData } from "@/lib/sanitizeProductData";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id.split("-");
  const idNumber = id[id.length - 1];
  const { product } = await getProductById(idNumber);
  const productData = sanitizeProductData(product);

  return (
    <div>
      <ProductDetails productInfo={productData} />
    </div>
  );
};

export default ProductPage;

