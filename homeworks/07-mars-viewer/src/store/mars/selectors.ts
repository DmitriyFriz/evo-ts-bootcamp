import { RootState } from '../store';

export const selectSelectedRover = (state: RootState) => state.mars.selectedRover;
