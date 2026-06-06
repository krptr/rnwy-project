import { useProducts } from "../../../hooks/useProducts";
import { BestSellersCard } from "../../../components/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";

function BestSellersSection() {
  const { products } = useProducts();

  const bestSellers = [
    products.find((p) => p.title == "Cream Trench"),
    products.find((p) => p.title == "Field Coach Jacket"),
    products.find((p) => p.title == "Grey Track Jacket"),
    products.find((p) => p.title == "Ribbed Crewneck"),
  ];

  return (
    <section className=" px-16 py-16 md:px-32 md:py-24">
      <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-4">
        The Edit
      </span>

      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h1>
          <span className="font-black font-display text-2xl md:text-3xl lg:text-5xl text-on-background">
            Best<span className="text-primary">sellers.</span>
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
          <BestSellersCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export { BestSellersSection };
