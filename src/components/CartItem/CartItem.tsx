import { ICartItem } from "cart-types";
import { useGetProductByIdQuery } from "../../features/api/apiSlice";
import { IProduct } from "products-types";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export default function CartItem({ id, quantity }: ICartItem) {
  const { data } = useGetProductByIdQuery(id);

  const dispatch = useDispatch();

  if (!data) {
    return <Skeleton animation="wave" />;
  }

  const { title, price, image } = data as IProduct;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, quantity: 1, price }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <Box style={{ width: "100px", height: "200px", overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">Price: ${price}</Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleRemoveFromCart}>
            <RemoveIcon color="primary" />
          </IconButton>
          <Typography variant="body1">{quantity}</Typography>
          <IconButton onClick={handleAddToCart}>
            <AddIcon color="primary" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
