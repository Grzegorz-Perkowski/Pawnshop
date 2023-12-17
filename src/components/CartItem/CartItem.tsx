import { ICartItem } from "cart-types";
import { useGetProductByIdQuery } from "../../features/api/apiSlice";
import { IProduct } from "products-types";

export default function CartItem({ id, quantity }: ICartItem) {
  const { data } = useGetProductByIdQuery(id);

  if (!data) {
    return <div>No data available</div>;
  }

  const { title, price, description, category, image, rating } =
    data as IProduct;

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
