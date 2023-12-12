import { useSelector } from "react-redux";
import { CartItem as ICartItem } from "../../interfaces/Cart.interface";
import CartItem from "../CartItem/CartItem";
export default function Cart() {
  const cart = useSelector((state: { cart: ICartItem[] }) => state.cart);

  return (
    <div>
      {cart?.map(({ id, quantity }) => (
        <div key={id}>
          <CartItem id={id} quantity={quantity} />
        </div>
      ))}
    </div>
  );
}
