import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ICartItem } from "../../interfaces/Cart.interface";

function Navbar() {
  const cart = useSelector((state: { cart: ICartItem[] }) => state.cart);

  const totalQuantity = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/cart">Cart</Link>
      {totalQuantity > 0 ? <span>({totalQuantity})</span> : <span>(0)</span>}
    </div>
  );
}

export default Navbar;
