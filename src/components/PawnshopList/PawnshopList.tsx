import { useGetAllProductsQuery } from "../../features/api/apiSlice";

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
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
}
