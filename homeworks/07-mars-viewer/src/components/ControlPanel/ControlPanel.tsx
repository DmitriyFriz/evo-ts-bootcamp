import React from 'react';
import { ToggleRover } from '../ToggleRover';
import { ToggleSol } from '../ToggleSol';
import { SolLoading } from '../SolLoading';

export const ControlPanel = () => {
  return (
    <div>
      <ToggleRover />
      <ToggleSol />
      <SolLoading />
    </div>
  );
};
