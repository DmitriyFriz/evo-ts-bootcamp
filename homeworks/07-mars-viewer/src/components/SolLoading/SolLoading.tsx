import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSelectedSol, selectSelectedRover } from '../../store/mars/selectors';
import { fetchSol } from '../../store/mars/marsSlice';

export const SolLoading = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(fetchSol());
      }}
    >
      load
    </button>
  );
};
