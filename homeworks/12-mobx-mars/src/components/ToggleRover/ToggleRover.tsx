import React from 'react';
import { observer } from 'mobx-react-lite';
import { RoverName } from '../../types';
import { useStore } from '../../store/storeMobX';

// style
import s from './ToggleRover.module.scss';

export const ToggleRover = observer(() => {
  const marsStore = useStore('marsStore');

  return (
    <select
      className={s.select}
      value={marsStore.selectedRover}
      onChange={(e) => marsStore.changeRover(e.target.value as RoverName)}
    >
      <option value={RoverName.Curiosity}>{RoverName.Curiosity}</option>
      <option value={RoverName.Opportunity}>{RoverName.Opportunity}</option>
      <option value={RoverName.Perseverance}>{RoverName.Perseverance}</option>
      <option value={RoverName.Spirit}>{RoverName.Spirit}</option>
    </select>
  );
});
