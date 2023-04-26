import ProductCard from "../domain/product/ProductCard";
import imageSVG from "../assets/image/mikael-stenberg-cJeGGOI8eE0-unsplash.jpg";

const Products = () => {
  return (
    <div>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <ProductCard
            key={i}
            image={imageSVG}
            name={"Refri Coca zero 350ml"}
            description={
              "(Pão, hamburguer, calabresa, iscas de carne, muçarela, cebola e picles)"
            }
            price={5}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
    </div>
  );
};

export default Products;
