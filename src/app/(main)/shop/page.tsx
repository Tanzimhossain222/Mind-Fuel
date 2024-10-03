import Breadcrumbs from "@/components/pageProps/Breadcrumbs";
import ShopSideNav from "@/components/pageProps/shopPage/ShopSideNav";
import ProductsDisplay from "./_components/ProductsDisplay";
import { getProducts } from "@/lib/getProduct";
import { sanitizeProductData } from "@/lib/sanitizeProductData";

const ShopPage = async() => {
  const { products } = await getProducts();
  // console.log(products.products[0]); 
  const productsData = await sanitizeProductData(products);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
{ products  &&       <ProductsDisplay products ={productsData} />}
      </div>
    </div>
  );
}; 

export default ShopPage; 

