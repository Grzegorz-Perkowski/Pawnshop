export interface CartItem {
  id: number;
  quantity: number;
}

export interface CartState extends Array<CartItem> {}