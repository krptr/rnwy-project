import { useProducts } from "../../../hooks/useProducts";
import { ShopByCategoryCard } from "../../../components/ProductCard";

function ShopByCategorySection() {
  const { products } = useProducts();

  const categories = [
    products.find((p) => p.category == "tops"),
    products.find((p) => p.category == "bottoms"),
    products.find((p) => p.category == "outerwear"),
    products.find((p) => p.category == "accessories"),
    products.find((p) => p.category == "footwear"),
  ];

  const categoryCounts = {
    tops: products.filter((p) => p.category == "tops").length,
    bottoms: products.filter((p) => p.category == "bottoms").length,
    outerwear: products.filter((p) => p.category == "outerwear").length,
    accessories: products.filter((p) => p.category == "accessories").length,
    footwear: products.filter((p) => p.category == "footwear").length,
  };

  return (
    <section id="featured-products" className=" px-16 py-16 md:px-32 md:py-24">
      <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-4">
        Browse
      </span>

      <h1>
        <span className="font-black font-display text-2xl md:text-3xl lg:text-5xl text-on-background">
          Shop by <span className="text-primary">category.</span>
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
        {categories.map((product) => (
          <ShopByCategoryCard
            key={product.id}
            product={product}
            categoryCount={categoryCounts[product.category]}
          />
        ))}
      </div>
    </section>
  );
}

export { ShopByCategorySection };
