export interface CartItem {
  id: number;
  quantity: number;
  price?: number;
}

export interface CartState extends Array<CartItem> {}