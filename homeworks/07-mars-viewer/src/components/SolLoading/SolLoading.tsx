import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSelectedSol, selectSelectedRover } from '../../store/mars/selectors';
import { fetchSol } from '../../store/mars/marsSlice';

export const SolLoading = () => {
  const dispatch = useAppDispatch();
  const selectedSol = useAppSelector(selectSelectedSol);
  const selectedRover = useAppSelector(selectSelectedRover);
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(fetchSol({ sol: selectedSol, rover: selectedRover }));
      }}
    >
      load
    </button>
  );
};
