import { productImages } from "../utils/product-images";
import { Button } from "./Buttons";
import { IoIosAdd } from "react-icons/io";

function FeaturedProductCard({ product }) {
  const { title, category, price } = product;
  const image = productImages[title];

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <div className="bg-surface p-1 absolute top-3 left-3 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] z-10">
          {category}
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out hover:scale-110"
        />
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <span className="font-display font-bold text-on-background text-lg tracking-tight">
            {title}
          </span>
          <span className="block text-primary font-sans font-semibold text-sm">
            ${price}
          </span>
        </div>
        <Button
          variant="outline"
          className="hover:bg-primary hover:text-on-primary w-10 h-10 p-0 font-bold"
        >
          <IoIosAdd className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

// function ShopProductCard({ product }) {
//   const { id, title, tags, price, rating } = product;
//   const image = productImages[title];
// }

export { FeaturedProductCard };
