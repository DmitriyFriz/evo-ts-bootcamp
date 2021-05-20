import React from 'react';
import { ToggleRover } from '../ToggleRover';
import { ToggleSol } from '../ToggleSol';

export const ControlPanel = () => {
  return (
    <div>
      <ToggleRover />
      <ToggleSol />
    </div>
  );
};
