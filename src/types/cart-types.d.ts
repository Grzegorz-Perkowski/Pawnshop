
declare module 'cart-types' { 
   interface ICartItem {
    id: number;
    quantity?: number;
    price?: number;
  }

   interface ICartState extends Array<ICartItem> {}
}
