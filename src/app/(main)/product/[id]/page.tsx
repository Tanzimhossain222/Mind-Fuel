import { getProductById } from "@/lib/getProduct";
import ProductDetails from "../_components/productDetails/ProductDetails";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id.split("-");
  const idNumber = id[id.length - 1];
  const { product } = await getProductById(idNumber);

  return (
    <div>
      <ProductDetails productInfo={product} />
    </div>
  );
};

export default ProductPage;

