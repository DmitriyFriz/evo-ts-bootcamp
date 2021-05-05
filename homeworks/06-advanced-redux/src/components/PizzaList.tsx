import React from "react";
import * as R from "ramda";
import { PizzaItem } from "./PizzaItem";
import { Pizza } from '../types';

interface PizzaListProps {
  pizza: Pizza[];
}

export const PizzaList = React.memo(function ({ pizza }: PizzaListProps) {
  return (
    <>
      {R.map((p) =>
        <PizzaItem
          key={p._id}
          _id={p._id}
          name={p.name}
          price={p.price}
        />, pizza)}
    </>
  );
});
