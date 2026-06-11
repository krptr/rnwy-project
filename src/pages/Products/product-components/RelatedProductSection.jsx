import { RelatedProductCard } from "../../../components/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { useProducts } from "../../../hooks/useProducts";

function RelatedProductSection({ product }) {
  const { products } = useProducts();
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  return (
    <section className="bg-surface-container/95 px-8 py-16 md:px-32 md:py-24 border-b border-b-outline-variant">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h1>
          <span className="font-black font-display text-2xl md:text-3xl lg:text-4xl text-on-background">
            You Might Also <span className="text-primary">Like</span>
          </span>
        </h1>
        <span className="flex items-center gap-1.5 font-sans text-[9px] uppercase text-primary tracking-[0.2em] font-bold">
          shop all
          <span>
            <FaArrowRightLong />
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 mt-12">
        {relatedProducts.map((product) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export { RelatedProductSection };
