import { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
} from "../../features/api/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import Sidebar from "../Sidebar/Sidebar";

export default function ProductsList() {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const { data: categories } = useGetAllCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <div>Error loading products list</div>;
  }

  if (!products || products.length === 0) {
    return <div>No data available</div>;
  }

  function handleCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSelectedCategory(value);
  }

  function handlePriceRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSelectedPriceRange(value);
  }

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .filter((product) => {
      switch (selectedPriceRange) {
        case "0-50":
          return product.price >= 0 && product.price <= 50;
        case "50-100":
          return product.price > 50 && product.price <= 100;
        case "100-150":
          return product.price > 100 && product.price <= 150;
        case "over-150":
          return product.price > 150;
        default:
          return true;
      }
    });

  return (
    <div>
      <Sidebar
        categories={categories ?? []}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedPriceRange={selectedPriceRange}
        handlePriceRangeChange={handlePriceRangeChange}
      />

      <div>
        <h3>Filtered Products:</h3>
        {filteredProducts.length === 0 ? (
          <div>No products match the selected filters</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductItem {...product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
