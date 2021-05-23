import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSelectedSol, selectSelectedRover } from '../../store/mars/selectors';
import { fetchSol } from '../../store/mars/marsSlice';

// style
import s from './SolLoading.module.scss';

export const SolLoading = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={s.button}
      type="button"
      onClick={() => {
        dispatch(fetchSol());
      }}
    >
      load
    </button>
  );
};
