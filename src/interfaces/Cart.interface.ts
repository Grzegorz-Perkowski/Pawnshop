export interface ICartItem {
  id: number;
  quantity: number;
  price?: number;
}

export interface ICartState extends Array<ICartItem> {}