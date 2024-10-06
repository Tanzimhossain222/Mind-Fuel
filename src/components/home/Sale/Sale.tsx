import Image from "next/image";
import Link from "next/link";

interface Image {
  id: string;
  src: string;
  alt: string;
}

const Sale = ({ images }: { images: Image[] }) => {
  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
      {/* Left side image: Spanning full height */}
      <div className="col-span-1 h-[750px] relative">
        <div className="w-full h-full p-4 bg-white shadow-md rounded-lg">
          <Link href="/shop">
            <Image
              className="h-full w-full object-cover rounded-lg"
              src={images[0].src}
              layout="fill" // Ensures the image fills its container
              alt={images[0].alt}
            />
          </Link>
        </div>
      </div>

      {/* Right side images: Two stacked images, each half the height of the left image */}
      <div className="col-span-1 grid grid-rows-2 gap-4">
        {/* Image 2 */}
        <div className="w-full h-[375px] relative p-4 bg-white shadow-md rounded-lg">
          <Link href="/shop">
            <Image
              className="object-cover"
              src={images[1].src}
              layout="fill" // Ensure it fills the container
              alt={images[1].alt}
            />
          </Link>
        </div>

        {/* Image 3 */}
        <div className="w-full h-[375px] relative p-4 bg-white shadow-md rounded-lg">
          <Link href="/shop">
            <Image
              className="object-cover"
              src={images[2].src}
              layout="fill" // Ensure it fills the container
              alt={images[2].alt}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
