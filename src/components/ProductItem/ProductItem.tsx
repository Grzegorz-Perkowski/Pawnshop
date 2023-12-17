import { Button, Link } from "@mui/material";
import { IProduct } from "../../interfaces/Product.interface";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

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
    <>
      <Image src={image} alt={title} />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">Price: ${price}</Typography>
      <Typography variant="caption">
        Rating: {rating.rate} ({rating.count} reviews)
      </Typography>
      <div>
        <Link href={`/products/${id}`}>View</Link>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </div>
    </>
  );
}

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;
