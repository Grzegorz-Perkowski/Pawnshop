import { useGetAllProductsQuery } from "../../features/api/apiSlice";
import ProductItem from "../ProductItem/ProductItem";

export default function PawnshopList() {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <div>Error loading products list</div>;
  }

  if (!products || products.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  );
}
