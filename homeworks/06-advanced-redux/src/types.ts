export type Pizza = {
  name: string;
  price: number;
  _id: string;
}

export type BasketItem = Pizza & { count: number }

export type State = {
  pizza: Pizza[];
  basket: BasketItem[];
}
