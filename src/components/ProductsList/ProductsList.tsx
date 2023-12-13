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
      <div>
        <input
          type="radio"
          id="all"
          name="categories"
          value="all"
          checked={selectedCategory === "all"}
          onChange={handleCategoryChange}
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
            onChange={handleCategoryChange}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}

      <div>
        <input
          type="radio"
          id="all"
          name="priceRanges"
          value="all"
          checked={selectedPriceRange === "all"}
          onChange={handlePriceRangeChange}
        />
        <label htmlFor="all">All Prices</label>
      </div>
      <div>
        <input
          type="radio"
          id="0-50"
          name="priceRanges"
          value="0-50"
          checked={selectedPriceRange === "0-50"}
          onChange={handlePriceRangeChange}
        />
        <label htmlFor="0-50">0 - 50</label>
      </div>
      <div>
        <input
          type="radio"
          id="50-100"
          name="priceRanges"
          value="50-100"
          checked={selectedPriceRange === "50-100"}
          onChange={handlePriceRangeChange}
        />
        <label htmlFor="50-100">50 - 100</label>
      </div>
      <div>
        <input
          type="radio"
          id="100-150"
          name="priceRanges"
          value="100-150"
          checked={selectedPriceRange === "100-150"}
          onChange={handlePriceRangeChange}
        />
        <label htmlFor="100-150">100 - 150</label>
      </div>
      <div>
        <input
          type="radio"
          id="over-150"
          name="priceRanges"
          value="over-150"
          checked={selectedPriceRange === "over-150"}
          onChange={handlePriceRangeChange}
        />
        <label htmlFor="over-150">Over 150</label>
      </div>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  );
}
