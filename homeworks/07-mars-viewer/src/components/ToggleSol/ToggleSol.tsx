import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSelectedSol } from '../../store/mars/selectors';
import { changeSol } from '../../store/mars/marsSlice';

// style
import s from './ToggleSol.module.scss';

export const ToggleSol = () => {
  const dispatch = useAppDispatch();
  const selectedSol = useAppSelector(selectSelectedSol);

  return (
    <input
      className={s.input}
      value={selectedSol}
      type="number"
      min="1"
      onChange={(e) => dispatch(changeSol(+e.target.value))}
    />
  );
};
