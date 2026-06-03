import { useProducts } from "../../../hooks/useProducts";
import { FeaturedProductCard } from "../../../components/ProductCard";

function FeaturedProductsSection() {
  const { products } = useProducts();

  const featured = [
    products.find((p) => p.category == "tops"),
    products.find((p) => p.category == "bottoms"),
    products.find((p) => p.category == "outerwear"),
    products.find((p) => p.category == "accessories"),
  ];

  return (
    <section
      id="featured-products"
      className="bg-surface-container px-16 py-16 md:px-32 md:py-24"
    >
      <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-4">
        The Edit
      </span>
      <h1>
        <span className="font-black font-display text-2xl md:text-3xl lg:text-5xl text-on-background">
          Featured pieces.
        </span>
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
        {featured.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export { FeaturedProductsSection };
