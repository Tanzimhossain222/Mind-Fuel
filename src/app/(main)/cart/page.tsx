import Breadcrumbs from "@/components/pageProps/Breadcrumbs";
import CartDetails from "./_components/CartDetails";

const CartPage = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" prevLocation={"/"} />
      <CartDetails />
    </div>
  );
};

export default CartPage;

