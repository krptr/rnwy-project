import { Catalogue } from "./shop-components/Catalogue";
import { FilterButtonsSection } from "./shop-components/FilterButtonsSection";
import { ShopSection } from "./shop-components/ShopSection";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useSearchParams } from "react-router";
import { ErrorPage } from "../ErrorPage";

function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const [maxPrice, setMaxPrice] = useState(600);
  const [sortBy, setSortBy] = useState("featured");
  const { products } = useProducts();

  function handleCategoryChange(category) {
    setSearchParams({ category });
  }

  const filteredProducts = products
    .filter(
      (product) =>
        activeCategory == "all" || product.category == activeCategory,
    )
    .filter((product) => product.price <= maxPrice)
    .sort((a, b) => {
      if (sortBy == "price-asc") return a.price - b.price;
      if (sortBy == "price-desc") return b.price - a.price;
      return 0;
    });

  if (!activeCategory) return <ErrorPage />;

  return (
    <>
      <Catalogue />
      <FilterButtonsSection
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ShopSection products={filteredProducts} />
    </>
  );
}

export { ShopPage };
