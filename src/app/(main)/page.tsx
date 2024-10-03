import Banner from "@/components/Banner/Banner";
import BannerBottom from "@/components/Banner/BannerBottom";
import BestSellers from "@/components/home/BestSellers/BestSellers";
import NewArrivals from "@/components/home/NewArrivals/NewArrivals";
import Sale from "@/components/home/Sale/Sale";
import SpecialOffers from "@/components/home/SpecialOffers/SpecialOffers";
import YearProduct from "@/components/home/YearProduct/YearProduct";
import { Product } from "@/interface";
import { getProducts } from "@/lib/getProduct";

export default async function Home() {
  const { products } = await getProducts();

  const images = products.map((product: Product) => {
    return {
      id: product.id,
      src: product.image.src,
      alt: product.title,
    }
  }); 


  return (
    <div className="w-full mx-auto">
      <Banner images={images} />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
}

