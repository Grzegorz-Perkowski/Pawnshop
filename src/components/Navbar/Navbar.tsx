import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
