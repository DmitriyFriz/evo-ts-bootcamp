export type Pizza = {
  name: string;
  price: number;
  _id: string;
}

export type Bascket = Pizza & { count: number }

export type State = {
  pizza: Pizza[];
  basket: Bascket[];
}
