import { Button, Link } from "@mui/material";
import { IProduct } from "../../interfaces/Product.interface";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Typography, Box } from "@mui/material";
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
    <Box>
      <Image src={image} alt={title} />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">Price: ${price}</Typography>
      <Typography variant="caption">
        Rating: {rating.rate} <StarRateIcon color="error" /> ({rating.count}{" "}
        reviews)
      </Typography>
      <Box>
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
