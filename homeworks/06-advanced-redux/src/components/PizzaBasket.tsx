import * as R from "ramda";
import React from "react";
import { BasketItem } from "../types";
import { PizzaBasketItem } from "./PizzaBasketItem";

interface PizzaBucketProps {
  basket: BasketItem[],
}

export const PizzaBasket = React.memo(function ({ basket }: PizzaBucketProps) {
  return (
    <>
      {R.map((b) =>
        <PizzaBasketItem
          _id={b._id}
          key={b._id}
          price={b.price}
          name={b.name}
          count={b.count}
        />, basket)}
    </>
  );
});
