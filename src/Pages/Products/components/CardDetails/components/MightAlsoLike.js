import { ProductSlider } from "./ProductsSlider";
import { useProducts } from "../../../../../Hooks/useProducts";

export function MightAlsoLike() {
  const { products } = useProducts();

  return (
    <div className="mt-10">
      <ProductSlider
        items={products}
        title="You Might Also Like"
        slidesToShow={3}
        autoSlide={true} // Manual navigation only
      />
    </div>
  );
}
