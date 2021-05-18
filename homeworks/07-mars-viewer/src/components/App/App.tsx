import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSol } from '../../store/mars/marsSlice';
import { RoverName } from '../../types';

export const App = () => {
  const dispatch = useDispatch();

  console.log(useSelector((s) => s));
  return (
    <div>
      <h1>Hello world</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(fetchSol({ sol: 1, rover: RoverName.Perseverance }));
        }}
      >
        load
      </button>
    </div>
  );
};
