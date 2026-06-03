import { ShopProductCard } from "../../../components/ProductCard";

function ShopSection({ products }) {
  return (
    <section className="bg-surface-container-low/95 border-b border-outline-variant px-8 py-12 lg:px-32 lg:py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 2xl:grid-cols-3">
        {products.map((product) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export { ShopSection };
