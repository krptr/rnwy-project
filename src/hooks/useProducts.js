import productsData from "../data/products.json";

function useProducts() {
  return { products: productsData };
}

export { useProducts };
