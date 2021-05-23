import { createSelector } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { RootState } from '../store';

export const selectSelectedRover = (state: RootState) => state.mars.selectedRover;

export const selectSelectedSol = (state: RootState) => state.mars.selectedSol;

export const selectRovers = (state: RootState) => state.mars.rovers;

export const selectPhotos = createSelector(
  selectSelectedSol,
  selectSelectedRover,
  selectRovers,
  (sol, rover, rovers) => {
    const currentRover = rovers[rover];
    return currentRover ? currentRover[sol] : undefined;
  }
);

export const selectAllPhotos = (state: RootState) => state.mars.rovers;
