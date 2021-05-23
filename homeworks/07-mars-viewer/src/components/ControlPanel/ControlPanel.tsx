import React from 'react';
import { ToggleRover } from '../ToggleRover';
import { ToggleSol } from '../ToggleSol';
import { SolLoading } from '../SolLoading';

// style
import s from './ControlPanel.module.scss';

export const ControlPanel = () => {
  return (
    <div className={s.container}>
      <ToggleRover />
      <ToggleSol />
      <SolLoading />
    </div>
  );
};
