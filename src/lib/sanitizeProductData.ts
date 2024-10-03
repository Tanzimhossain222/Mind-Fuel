import { Product, ProductsList } from "@/interface";

export const sanitizeProductData =  (products: Product[]): ProductsList[] => {
  return products.map((item) => ({
    _id: item.id,
    img: item.image?.src || '', 
    productName: item.title, 
    price: item.variants[0]?.price || '0', 
    color: item.options[0]?.values[0] || '', 
    badge: item.status === 'active' ? 'New' : '', 
    des: item.body_html,
  }));
};
