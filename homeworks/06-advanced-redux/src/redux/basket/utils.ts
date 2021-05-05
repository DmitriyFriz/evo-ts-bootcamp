import { BasketItem, Pizza } from '../../types';

interface GetPizzaAndBasketItem {
  (id: string, basket: BasketItem[], pizza: Pizza[]): PairPizzaBasketItem;
}

interface GetNeWBasketItem {
  (basketItem: FoundBasketItem, pizzaItem: Pizza, value: 1 | -1): BasketItem
}

interface InsertNeWBasketItem {
  (newBasketItem: BasketItem, id: string, basket: BasketItem[]): BasketItem[]
}

interface UpdateBasket {
  (id: string, basket: BasketItem[], pizza: Pizza[], value: 1 | -1): BasketItem[];
}

type FoundPizzaItem = Pizza | undefined;
type FoundBasketItem = BasketItem | undefined;

type PairPizzaBasketItem = {
  pizzaItem: FoundPizzaItem,
  basketItem: FoundBasketItem
}

const getPizzaAndBasketItem: GetPizzaAndBasketItem = (id, basket, pizza) => {
  const pizzaItem = pizza.find((item) => item._id === id);
  const basketItem = basket.find((item) => item._id === id);

  return { pizzaItem, basketItem };
};

const getNeWBasketItem: GetNeWBasketItem = (basketItem, pizzaItem, value) => {
  if (basketItem === undefined) {
    return {
      ...pizzaItem,
      count: 1
    }
  }

  const { count, price } = basketItem;

  return {
    ...basketItem,
    count: count + value,
    price: Math.round((price + value * pizzaItem.price) * 100) / 100 ,
  }
}

const insertNewBasketItem: InsertNeWBasketItem = (newBasketItem, id, basket) => {
  const index = basket.findIndex((item) => item._id === id);

  if (newBasketItem.count === 0) {
    return [
      ...basket.slice(0, index),
      ...basket.slice(index + 1)
    ]
  }

  if (index === -1) {
    return [
      ...basket,
      newBasketItem
    ]
  }

  return [
    ...basket.slice(0, index),
    newBasketItem,
    ...basket.slice(index + 1)
  ];
}

export const updateBasket: UpdateBasket = (id, basket, pizza, value) => {
  const { pizzaItem, basketItem } = getPizzaAndBasketItem(id, basket, pizza);

  if (pizzaItem === undefined) {
    return basket;
  }

  const newBasketItem = getNeWBasketItem(basketItem, pizzaItem, value);

  return insertNewBasketItem(newBasketItem, id, basket);
}
