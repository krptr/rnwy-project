import { Link } from "react-router";
import { productImages } from "../../../utils/product-images";
import { StarRating } from "../../../utils/StarRating";
import { Button } from "../../../components/Buttons";
import { capitalizeFirstLetter } from "../../../utils/capitalize-first-letter";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

function ProductDetailSection({ product }) {
  const { title, price, rating, category, tags, description } = product;
  const image = productImages[title];
  const capitalizeCategoryFirstLetter = capitalizeFirstLetter(category);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["S", "M", "L", "Xl", "XXL", "3XL"];

  return (
    <section className="bg-surface-container/95 px-8 py-8 xl:px-36 xl:py-24">
      <div className="flex gap-2 text-sm mb-5">
        <Link to="/shop">
          <span className="text-on-surface-variant hover:text-primary">
            Shop
          </span>
        </Link>

        <span className="text-on-surface">/</span>

        <Link to={`/shop?category=${category}`}>
          <span className="text-on-surface-variant hover:text-primary">
            {capitalizeCategoryFirstLetter}
          </span>
        </Link>

        <span className="text-on-surface">/</span>

        <span className="text-on-surface">{title}</span>
      </div>

      <div className="grid grid-cols-1 gap-15 xl:grid-cols-2">
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <div className="bg-surface px-3 py-2 absolute top-4 left-4 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-widest z-10">
            {category}
          </div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out hover:scale-110"
          />
        </div>

        <div className="flex flex-col">
          <div className="font-sans uppercase text-on-surface-variant text-[9px] tracking-[0.2rem]">
            {category}
          </div>
          <div className="font-black font-display text-on-background text-3xl md:text-4xl xl:text-6xl mt-3">
            {title}
          </div>

          <div className="flex gap-5 mt-4">
            <div className="font-black font-display text-primary text-2xl xl:text-3xl">
              ${price}
            </div>
            <div className="flex items-center gap-3">
              <StarRating rating={rating} className="text-tertiary w-4 h-4" />
              <span className="block text-on-surface-variant text-sm">
                {rating}
              </span>
            </div>
          </div>

          <div className="mt-8 font-sans font-medium uppercase text-on-surface-variant text-[9px] tracking-widest">
            size
          </div>
          <div className="flex gap-4 flex-wrap mt-3">
            {sizes.map((size) => (
              <Button
                key={size}
                onClick={() => setSelectedSize(size)}
                variant={selectedSize === size ? "primary" : "outline"}
                className="min-w-[3r3m] h-11 text-xs border border-outline-variant"
              >
                {size}
              </Button>
            ))}
          </div>

          <div className="mt-8 font-sans uppercase text-on-surface-variant text-[9px] tracking-widest">
            quantity
          </div>

          <div className="flex items-center gap-3 justify-around px-2 border border-outline-variant rounded-3xl w-35 h-12 mt-2">
            <button
              onClick={() => setCount((prev) => Math.max(1, prev - 1))}
              aria-label="Decrease quantity"
              className="text-on-surface-variant hover:text-primary"
            >
              <FiMinus className="w-4 h-4" />
            </button>

            <span className="text-on-surface-variant">{count}</span>

            <button
              onClick={() => setCount((prev) => prev + 1)}
              aria-label="Increase quantity"
              className="text-on-surface-variant hover:text-primary"
            >
              <FiPlus className="w-4 h-4" />
            </button>
          </div>

          <div>
            <Button variant="primary" radius="xxl" className="w-full mt-8">
              Add to cart
            </Button>
          </div>

          <div className="mt-8 text-md leading-relaxed text-on-surface-variant">
            {description}
          </div>

          <div className="flex gap-3 mt-6">
            {tags.map((tag) => (
              <div className="text-on-surface-variant text-sm border border-outline-variant px-4 py-1 rounded-2xl">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ProductDetailSection };
