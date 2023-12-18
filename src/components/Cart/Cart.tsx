import { useSelector } from "react-redux";
import { ICartItem } from "cart-types";
import CartItem from "../CartItem/CartItem";

import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Cart() {
  const cart = useSelector((state: { cart: ICartItem[] }) => state.cart);

  const totalSum = cart.reduce(
    (sum, { price, quantity }) =>
      price !== undefined && quantity !== undefined
        ? sum + price * quantity
        : sum,
    0
  );

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            m: 2,
          }}
        >
          {cart.length > 0 ? (
            <Grid
              container
              display="flex"
              flexDirection="column"
              alignContent="flex-start"
            >
              {cart.map(({ id, quantity }) => (
                <Grid key={id} item md={12}>
                  <CartItem id={id} quantity={quantity} />
                </Grid>
              ))}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography variant="h5">
                  Total Sum: ${totalSum.toFixed(2)}
                </Typography>
              </Box>
            </Grid>
          ) : (
            <Box>
              <Typography variant="h3">
                Your cart is empty. Add items to your cart to see them here.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
