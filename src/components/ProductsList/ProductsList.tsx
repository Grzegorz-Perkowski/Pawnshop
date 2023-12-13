import { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
} from "../../features/api/apiSlice";
import ProductItem from "../ProductItem/ProductItem";

export default function PawnshopList() {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const { data: categories } = useGetAllCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <div>Error loading products list</div>;
  }

  if (!products || products.length === 0) {
    return <div>No data available</div>;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSelectedCategory(value);
  }

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div>
        <input
          type="radio"
          id="all"
          name="categories"
          value="all"
          checked={selectedCategory === "all"}
          onChange={handleChange}
        />
        <label htmlFor="all">All</label>
      </div>
      {categories?.map((category) => (
        <div key={category}>
          <input
            type="radio"
            id={category}
            name="categories"
            value={category}
            checked={selectedCategory === category}
            onChange={handleChange}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  );
}
