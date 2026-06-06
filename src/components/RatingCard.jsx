import { StarRating } from "../utils/StarRating";
import { useProducts } from "../hooks/useProducts";
import { twMerge } from "tailwind-merge";

function RatingCard({
  rating = 1,
  comment = "comment1",
  name = "name1",
  title = 0,
  size = "L",
  radius = "xl",
  className = "",
}) {
  const { products } = useProducts();
  const productTitles = products.map((p) => p.title);

  const base = "bg-background py-5 px-7 border border-outline-variant";

  const userComments = {
    comment1: `"Fit is unreal. The hoodie drapes like something three times the price."`,
    comment2: `"Caught compliments on the bomber within an hour of wearing it out."`,
    comment3: `"Heavy fabric, clean stitching. You can tell someone gave a damn."`,
  };

  const userNames = {
    name1: "Marcus T.",
    name2: "Ade O.",
    name3: "Yuki N.",
  };

  const sizes = {
    L: "size l",
    M: "size m",
    S: "size s",
  };

  const radii = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  return (
    <div className={twMerge(radii[radius], base, className)}>
      <div className="mb-6">
        <StarRating rating={rating} />
      </div>

      <div className="text-on-surface text-[15px] leading-relaxed mb-8">
        {userComments[comment]}
      </div>
      <div className="font-semibold text-on-surface text-[15px] mb-2">
        {userNames[name]}
      </div>
      <div className="flex gap-1 font-sans text-[7px] uppercase text-on-surface-variant tracking-[0.2em]">
        <span>{productTitles[title]}</span>
        <span> · </span>
        <span>{sizes[size]}</span>
      </div>
    </div>
  );
}

export { RatingCard };
