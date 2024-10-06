import ShopSideNav from "@/app/(main)/shop/_components/ShopSideNav";
import Breadcrumbs from "@/components/pageProps/Breadcrumbs";
import { getProducts } from "@/lib/getProduct";
import { sanitizeProductArrayData } from "@/lib/sanitizeProductData";
import ProductsDisplay from "./_components/ProductsDisplay";

const ShopPage = async () => {
  const { products } = await getProducts();
  const productsData = sanitizeProductArrayData(products);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" prevLocation="Home" />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        {products && <ProductsDisplay products={productsData} />}
      </div>
    </div>
  );
};

export default ShopPage;

