import { ICartItem } from "cart-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  const cart = useSelector((state: { cart: ICartItem[] }) => state.cart);

  const totalQuantity = cart.reduce(
    (accumulator, currentItem) => accumulator + (currentItem.quantity || 0),
    0
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="div">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            FAKE SHOP
          </Link>
        </Typography>

        <Typography variant="h6" component="div">
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <Badge badgeContent={totalQuantity} color="error">
              <ShoppingCartIcon sx={{ fontSize: 30 }} />
            </Badge>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
