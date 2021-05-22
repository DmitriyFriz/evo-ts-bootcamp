import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchSol } from '../../store/mars/marsSlice';
import { RoverName } from '../../types';
import { ControlPanel } from '../ControlPanel';

// style
import s from './App.module.scss';

export const App = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.container}>
      <ControlPanel />
    </div>
  );
};
