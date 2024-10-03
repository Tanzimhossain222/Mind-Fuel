import { saleImgOne, saleImgThree, saleImgTwo } from "@/assets/images/index";
import Image from "@/components/designLayouts/Image";
import Link from "next/link";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link href="/shop">
          <Image
            className="h-full w-full object-cover"
            imgSrc={saleImgOne.src}
          />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link href="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={saleImgTwo.src}
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link href="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={saleImgThree.src}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
