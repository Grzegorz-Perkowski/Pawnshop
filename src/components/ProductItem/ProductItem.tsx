import { Button, Link } from "@mui/material";
import { Product } from "../../interfaces/Product.interface";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductItem({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, quantity: 1, price }));
  };

  return (
    <div>
      <p>{id}</p>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{rating.rate}</p>
      <p>{rating.count}</p>
      <Link href={`/products/${id}`}>View</Link>
      <Button onClick={handleAddToCart}>Add to cart</Button>
    </div>
  );
}
