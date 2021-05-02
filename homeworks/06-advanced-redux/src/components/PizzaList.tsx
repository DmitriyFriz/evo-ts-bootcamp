import React from "react";
import * as R from "ramda";
import { PizzaItem } from "./PizzaItem";
import { Pizza } from '../types';

interface PizzaListProps {
  pizza: Pizza[];
  onAdd: (_id: string) => void;
}

export function PizzaList({ pizza, onAdd }: PizzaListProps) {
  return R.map((p) =>
    <PizzaItem
      key={p._id}
      _id={p._id}
      name={p.name}
      price={p.price}
      onAdd={onAdd}
    />, pizza);
}
