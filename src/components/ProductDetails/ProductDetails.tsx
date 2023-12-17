import { useGetProductByIdQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import { IProduct } from "products-types";
import CircularLoader from "../CircularProgress/CircularProgress";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

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
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", gap: 4 }}
    >
      <Image src={image} alt={title} />
      <Box
        sx={{
          width: "50%",
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
  );
};

export default ProductDetails;

const Image = styled.img`
  width: 30%;
  height: 400px;
  object-fit: contain;
`;
