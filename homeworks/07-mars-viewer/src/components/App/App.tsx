import React from 'react';
import { useAppDispatch } from '../../hooks';
import { ControlPanel } from '../ControlPanel';
import { Gallery } from '../Gallery';

// style
import s from './App.module.scss';

export const App = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.container}>
      <ControlPanel />
      <Gallery />
    </div>
  );
};
