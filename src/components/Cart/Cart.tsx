import { useSelector } from "react-redux";
import { ICartItem } from "../../interfaces/Cart.interface";
import CartItem from "../CartItem/CartItem";
export default function Cart() {
  const cart = useSelector((state: { cart: ICartItem[] }) => state.cart);

  const totalSum = cart.reduce(
    (sum, { price }) => (price !== undefined ? sum + price : sum),
    0
  );

  return (
    <div>
      {cart?.map(({ id, quantity }) => (
        <div key={id}>
          <CartItem id={id} quantity={quantity} />
        </div>
      ))}
      <div>
        <strong>Total Sum: ${totalSum.toFixed(2)}</strong>
      </div>
    </div>
  );
}
