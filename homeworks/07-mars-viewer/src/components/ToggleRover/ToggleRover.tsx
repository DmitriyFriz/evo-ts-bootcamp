import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSelectedRover } from '../../store/mars/selectors';
import { RoverName } from '../../types';
import { changeRover } from '../../store/mars/marsSlice';

export const ToggleRover = () => {
  const dispatch = useAppDispatch();
  const selectedRover = useAppSelector(selectSelectedRover);
  return (
    <select
      value={selectedRover}
      onChange={(e) => dispatch(changeRover(e.target.value as RoverName))}
    >
      <option value={RoverName.Curiosity}>{RoverName.Curiosity}</option>
      <option value={RoverName.Opportunity}>{RoverName.Opportunity}</option>
      <option value={RoverName.Perseverance}>{RoverName.Perseverance}</option>
      <option value={RoverName.Spirit}>{RoverName.Spirit}</option>
    </select>
  );
};
