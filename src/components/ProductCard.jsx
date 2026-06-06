import { productImages } from "../utils/product-images";
import { Button } from "./Buttons";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { capitalizeFirstLetter } from "../utils/capitalize-first-letter";
import { Link } from "react-router";

function BestSellersCard({ product }) {
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
          <FiPlus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function ShopProductCard({ product }) {
  const { title, price, category, rating } = product;
  const image = productImages[title];
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-full overflow-hidden rounded-t-xl">
        <div className="bg-surface p-1 absolute top-3 left-3 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] z-10">
          {category}
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out hover:scale-110"
        />
      </div>

      <div className="bg-surface-container-lowest rounded-b-xl px-4 py-6">
        <div className="flex justify-between items-center">
          <span className="font-display font-bold text-on-background text-base md:text-[22px] tracking-tight">
            {title}
          </span>
          <span className="font-display font-[1000] text-primary text-base md:text-xl">
            ${price}
          </span>
        </div>

        <div className="flex justify-start items-center gap-3 mb-4 mt-2">
          <StarRating rating={rating} />
          <span className="font-sans text-sm text-on-surface">{rating}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 justify-around px-2 border border-outline-variant rounded-3xl w-30 h-10">
            <button
              onClick={() => setCount((prev) => Math.max(1, prev - 1))}
              aria-label="Decrease quantity"
              className="hover:text-primary"
            >
              <FiMinus className="w-4 h-4" />
            </button>

            <span>{count}</span>

            <button
              onClick={() => setCount((prev) => prev + 1)}
              aria-label="Increase quantity"
              className="hover:text-primary"
            >
              <FiPlus className="w-4 h-4" />
            </button>
          </div>
          <Button variant="primary" className="md:w-45 2xl:w-50 h-10">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

function ShopByCategoryCard({ product, categoryCount }) {
  const { category, title } = product;
  const image = productImages[title];

  const categoryName = capitalizeFirstLetter(category);
  return (
    <Link
      to={`/shop?category=${category}`}
      onClick={() =>
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="group relative w-full h-full rounded-xl overflow-hidden">
        <div className="absolute inset-x-4 bottom-4 z-10">
          <span className="block font-bold font-display text-background">
            {categoryName}
          </span>
          <span className="font-sans text-[8px] uppercase text-background/70 tracking-[0.2em]">
            {categoryCount} Pieces
          </span>
        </div>
        <div className="absolute inset-0 z-5 bg-linear-to-t from-on-background/70 via-on-background/10 to-transparent pointer-events-none" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
        />
      </div>
    </Link>
  );
}

// Rating
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {rating >= star ? (
            <FaStar className="text-primary w-3 h-3" />
          ) : rating >= star - 0.5 ? (
            <FaStarHalfAlt className="text-primary w-3 h-3" />
          ) : (
            <FaRegStar className="text-primary w-3 h-3" />
          )}
        </span>
      ))}
    </div>
  );
}

export { BestSellersCard, ShopProductCard, ShopByCategoryCard };
