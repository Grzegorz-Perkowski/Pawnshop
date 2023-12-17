import { Button, Link } from "@mui/material";
import { IProduct } from "../../interfaces/Product.interface";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box/Box";
import styled from "@emotion/styled";
import StarRateIcon from "@mui/icons-material/StarRate";

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
        <Link href={`/products/${id}`}>
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
