import { CartItem as ICartItem } from "../../interfaces/Cart.interface";
import { useGetProductByIdQuery } from "../../features/api/apiSlice";
import { Product } from "../../interfaces/Product.interface";

export default function CartItem({ id, quantity }: ICartItem) {
  const { data } = useGetProductByIdQuery(id);

  if (!data) {
    return <div>No data available</div>;
  }

  const { title, price, description, category, image, rating } =
    data as Product;

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
      <p>{quantity}</p>
    </div>
  );
}
