import { useProducts } from "../../../hooks/useProducts";
import { FeaturedProductCard } from "../../../components/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";

function NewArrivalSection() {
  const { products } = useProducts();

  const bestSellers = [
    products.find((p) => p.title == "Track Sweatpant"),
    products.find((p) => p.title == "Olive Pocket Tee"),
    products.find((p) => p.title == "Ribbed Beanie"),
    products.find((p) => p.title == "Suede Chelsea Boot"),
  ];

  return (
    <section className=" px-16 py-16 md:px-32 md:py-24">
      <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-4">
        Just landed
      </span>

      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h1>
          <span className="font-black font-display text-2xl md:text-3xl lg:text-5xl text-on-background">
            New <span className="text-primary">Arrivals.</span>
          </span>
        </h1>
        <span className="flex items-center gap-1.5 font-sans text-[9px] uppercase text-primary tracking-[0.2em]">
          View all
          <span>
            <FaArrowRightLong />
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 mt-12">
        {bestSellers.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export { NewArrivalSection };
