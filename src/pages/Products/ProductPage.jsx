import { useParams } from "react-router";
import { useProducts } from "../../hooks/useProducts";
import { ErrorPage } from "../ErrorPage";
import { ProductDetailSection } from "./product-components/ProductDetailSection";
import { RelatedProductSection } from "./product-components/RelatedProductSection";

function ProductPage() {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(id));
  // const currentProductCategory = product.category;

  if (!product) return <ErrorPage />;

  return (
    <>
      <ProductDetailSection product={product} />
      <RelatedProductSection product={product} />
    </>
  );
}

export { ProductPage };
