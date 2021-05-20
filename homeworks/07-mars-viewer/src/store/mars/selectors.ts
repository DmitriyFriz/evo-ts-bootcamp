import { RootState } from '../store';

export const selectSelectedRover = (state: RootState) => state.mars.selectedRover;

export const selectSelectedSol = (state: RootState) => state.mars.selectedSol;
