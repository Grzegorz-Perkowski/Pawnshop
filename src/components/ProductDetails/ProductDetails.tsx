import { useGetProductByIdQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import { IProduct } from "products-types";
import styled from "@emotion/styled";

import CircularLoader from "../CircularProgress/CircularProgress";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProductDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(Number(id));

  if (isLoading) {
    return <CircularLoader />;
  }

  if (isError) {
    return <div>Error loading beer details</div>;
  }

  if (!product) {
    return <div>No data available</div>;
  }

  const { title, description, image }: IProduct = product;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          p: 4,
          maxWidth: "1400px",
          gap: 4,
        }}
      >
        <Grid item xs={12} md={4}>
          <Image src={image} alt={title} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Typography variant="h4" color="primary">
              {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
`;
