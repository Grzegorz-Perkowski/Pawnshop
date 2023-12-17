import { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
} from "../../features/api/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import FilterOptions from "../FilterOptions/FilterOptions";
import Grid from "@mui/material/Grid/Grid";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import CircularLoader from "../CircularProgress/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box/Box";

export default function ProductsList() {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const { data: categories } = useGetAllCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  if (isLoading) {
    return <CircularLoader />;
  }

  if (isError) {
    return <div>Error loading products list</div>;
  }

  if (!products || products.length === 0) {
    return <div>No data available</div>;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              p: 4,
            }}
          >
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Filters &#9660;
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <FilterOptions
                categories={categories ?? []}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
                selectedPriceRange={selectedPriceRange}
                handlePriceRangeChange={handlePriceRangeChange}
              />
            </Popover>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              p: 4,
            }}
          >
            {filteredProducts.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="h3">
                  No products match the selected filters
                </Typography>
              </Grid>
            ) : (
              filteredProducts.map((product) => (
                <Grid
                  key={product.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    minWidth: "300px",
                    p: 4,
                  }}
                >
                  <ProductItem {...product} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
