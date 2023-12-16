import { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
} from "../../features/api/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import Sidebar from "../Sidebar/Sidebar";
import { Grid, Typography, Box } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={3} maxWidth="1536px">
        <Grid item xs={12} md={2}>
          <Sidebar
            categories={categories ?? []}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            selectedPriceRange={selectedPriceRange}
            handlePriceRangeChange={handlePriceRangeChange}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          {filteredProducts.length === 0 ? (
            <Typography variant="body1">
              No products match the selected filters
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {filteredProducts.map((product) => (
                <Grid
                  key={product.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    gap: 2,
                    m: 5,
                  }}
                >
                  <ProductItem {...product} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
