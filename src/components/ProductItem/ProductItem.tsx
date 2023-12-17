import { IProduct } from "products-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import styled from "@emotion/styled";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarRateIcon from "@mui/icons-material/StarRate";
import Button from "@mui/material/Button";

export default function ProductItem({
  id,
  title,
  price,
  image,
  rating,
}: IProduct) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, quantity: 1, price }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
        gap: 1,
      }}
    >
      <Image src={image} alt={title} />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1">Price: ${price}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexDirection: "row",
        }}
      >
        <Typography>Rating: {rating.rate} </Typography>
        <StarRateIcon
          color="warning"
          sx={{
            fontSize: "1.4rem",
          }}
        />
        <Typography>({rating.count} reviews)</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Link to={`/products/${id}`}>
          <Button variant="contained">Read More</Button>
        </Link>
        <Button onClick={handleAddToCart} variant="outlined">
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;
