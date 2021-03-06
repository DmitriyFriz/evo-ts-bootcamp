import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  Loading,
  Missing,
  PizzaList,
  PizzaBasket,
  TotalPrice,
} from './components';
import { loadingPizza } from './redux/ducks/pizza/operations';
import { getPizza } from './redux/ducks/pizza/selectors';
import { getBasket, getTotalPrice } from './redux/ducks/basket/selectors';

function App() {
  const dispatch = useDispatch();
  const pizza = useSelector(getPizza);
  const isLoadedPizza = pizza.length > 0;
  const basket = useSelector(getBasket);
  const isStuffedBasket = basket.length > 0;

  const totalPrice = useSelector(getTotalPrice);

  useEffect(() => {
    dispatch(loadingPizza());
  }, [dispatch]);

  return (
    <div className='grid grid-cols-3 gap-4 h-full'>
      <div className='col-span-2 p-8'>
        <div className='grid grid-cols-4 gap-4'>
          {isLoadedPizza ? <PizzaList pizza={pizza} /> : <Loading />}
        </div>
      </div>
      <div className='col-span-1 bg-white overflow-y-auto h-full'>
        <div className='flex flex-col p-8'>
          <TotalPrice price={totalPrice} />
          {isStuffedBasket ? <PizzaBasket basket={basket} /> : <Missing />}
          <div className='flex flex-col'>
            <button className='bg-yellow-400 rounded-xl pt-2 pb-2'>
              Make Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
